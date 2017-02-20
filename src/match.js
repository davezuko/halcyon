import _curry2 from './internal/_curry2'
import _match from './internal/_match'

/**
 * @name match
 * @signature RegExp -> String -> [String]
 * @since v0.19.0
 * @description
 * Returns a list containing all matches for the regular expression. If there
 * are no matches, an empty list is returned.
 *
 * @example
 * match(/foo[a-z]+/g, 'foobar foo bazbiz foobop') // => ['foobar', 'foobop']
 */
export default _curry2(function match (regex, str) {
  return _match.call(str, regex) || []
})
