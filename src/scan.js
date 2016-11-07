import _curry3 from './internal/_curry3'

/**
 * @name scan
 * @signature (b, a -> b) -> b -> [a] -> [b]
 * @since v0.12.0
 * @description
 * @see reduce
 */
export default _curry3(function scan (fn, acc, as) {
  var i   = 0
    , len = as.length
    , bs  = [acc]

  for (; i < len; i++) {
    acc = fn(acc, as[i])
    bs[bs.length] = acc
  }
  return bs
})
