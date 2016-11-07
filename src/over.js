import _curry3 from './internal/_curry3'
import set from './set'

/**
 * @name over
 * @signature Lens k -> (v -> *) -> {k:v} -> {k:v}
 * @since v0.11.0
 * @description
 * Transforms the value at the focal point of a lens on a given object.
 * @see over
 * @see view
 *
 * @example
 * const nameLens = lensProp('name')
 * const user = { name: 'Michael' }
 *
 * over(lensProp('name'), toUpper, user) // => { name: 'MICHAEL' }
 * console.log(user)                     // => { name: 'Michael' }
 */
export default _curry3(function over (lens, fn, target) {
  return set(lens, fn(lens.get(target)), target)
})
