const CustomService = require('./custom-service');

exports.config = {
    runner: 'local',
    specs: [
        './specs/*.spec.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
    logLevel: 'info',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone', [CustomService]],
    framework: 'jasmine',
    reporters: ['dot','spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function(passed, assertion) {
        }
    }
}
