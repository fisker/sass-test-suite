import assert from 'node:assert/strict'
import test from 'node:test'
import testCases from './index.js'

test('main', () => {
  assert.ok(Array.isArray(testCases) && testCases.length > 1)
  for (const testCase of testCases) {
    assert.equal(typeof testCase.name, 'string')
    assert.ok(Array.isArray(testCase.files) && testCase.files.length !== 0)

    assert.deepEqual(Object.keys(testCase), ['name', 'files'])

    for (const file of testCase.files) {
      assert.equal(typeof file.name, 'string')
      assert.equal(typeof file.data, 'string')
      assert.deepEqual(Object.keys(file), ['name', 'data'])
    }
  }

  assert.ok(testCases.filter(({name}) => name))
})
