const test      = require('ava')
    , { assoc } = require('../dist/redash')

test('adds the property if it does not exist', (t) => {
  t.deepEqual(assoc('foo', 'bar', {}), { foo: 'bar' })
})

test('replaces the property if it already exists', (t) => {
  t.deepEqual(assoc('foo', 'baz', { foo: 'bar' }), { foo: 'baz'})
})

test('does not mutate the original object', (t) => {
  const obj = { foo: 'bar' }
      , res = assoc('foo', 'baz', obj)

  t.deepEqual(obj, { foo: 'bar' })
  t.deepEqual(res, { foo: 'baz' })
})

test('does not convert arrays to objects', (t) => {
  t.deepEqual(
    assoc(2, 'BOP', ['foo', 'bar', 'baz']),
    ['foo', 'bar', 'BOP']
  )
})
