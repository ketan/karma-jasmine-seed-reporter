var SeedReporter = function(baseReporterDecorator) {
  baseReporterDecorator(this);

  var noop = function() {};

  this.onBrowserError = noop;
  this.onBrowserLog = noop;
  this.onSpecComplete = noop;
  this.onRunComplete = noop;

  this.onBrowserComplete = function(_browser, result) {
    if (result.order && result.order.random && result.order.seed) {
      this.write(`Jasmine Seed: Randomized with seed ${result.order.seed}. Set config option 'karma.client.jasmine.random' to re-run with same order.\n`);
    }
  };
};

module.exports = {
  "reporter:jasmine-seed": ["type", SeedReporter]
};
