module.exports = function (app) {
  return {
    id: 'signalk-test-plugin',
    name: 'Test Plugin',
    description: 'Minimal plugin for CI workflow testing',

    schema: function () {
      return {
        type: 'object',
        properties: {
          greeting: {
            type: 'string',
            title: 'Greeting message',
            default: 'Hello from test plugin'
          }
        }
      }
    },

    start: function (options) {
      app.debug('Test plugin started')
      app.setPluginStatus('Running')
    },

    stop: function () {
      app.debug('Test plugin stopped')
    }
  }
}
