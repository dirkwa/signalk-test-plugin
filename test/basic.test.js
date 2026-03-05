const assert = require('assert')
const path = require('path')

// Test: plugin exports a function
const plugin = require(path.join(__dirname, '..', 'index.js'))
assert.strictEqual(typeof plugin, 'function', 'Plugin should export a function')

// Test: constructor returns an object with required fields
const mockApp = {
  debug: () => {},
  error: () => {},
  setPluginStatus: () => {}
}
const instance = plugin(mockApp)

assert.strictEqual(typeof instance.id, 'string', 'Plugin must have an id')
assert.strictEqual(typeof instance.name, 'string', 'Plugin must have a name')
assert.strictEqual(typeof instance.start, 'function', 'Plugin must have a start method')
assert.strictEqual(typeof instance.stop, 'function', 'Plugin must have a stop method')
assert.strictEqual(typeof instance.schema, 'function', 'Plugin must have a schema method')

// Test: schema returns valid JSON schema
const schema = instance.schema()
assert.strictEqual(schema.type, 'object', 'Schema should be an object type')

console.log('All tests passed')
