module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      config.coverageEnabled ? "tmp/qmlweb.covered.js" : "lib/qmlweb.js",
      { pattern: "lib/*.js", included: false },
      { pattern: "lib/*.js.map", included: false },
      { pattern: "tmp/qmlweb.*.js", included: false },
      { pattern: "tmp/*.js.map", included: false },
      "tests/common.js",
      "tests/failingTests.js",
      "tests/*/*.js",
      "tests/*/**/test*.js",
      { pattern: "tests/*/**/qmldir", included: false },
      { pattern: "tests/*/**/qml/*.js", included: false },
      { pattern: "tests/*/**/*.qml", included: false },
      { pattern: "tests/*/**/*.png", included: false }
    ],
    browsers: ["PhantomJSCustom"],
    reporters: ["spec", "coverage"],
    coverageReporter: {
      type: "lcov",
      dir: "coverage/"
    },
    browserDisconnectTolerance: 5,    // required for phantomjs in windows
    browserNoActivityTimeout: 100000, // required for phantomjs in windows
    customLaunchers: {
      PhantomJSCustom: {
        base: "PhantomJS",
        options: {
          onCallback: require("./tests/phantom.callback.js")
        }
      }
    }
  });
};
