var sphereMesh = require("../sphere")
  , almostEqual = require("almost-equal")

require("tap").test("sphere-mesh", function(t) {

  var s = sphereMesh(10)
  for(var i=0; i<s.positions.length; ++i) {
    var p = s.positions[i]
      , l = 0.0
    for(var j=0; j<3; ++j) {
      l += p[j] * p[j]
    }
    t.assert(almostEqual(l, 1.0, almostEqual.FLT_EPSILON, almostEqual.FLT_EPSILON))
  }
  
  t.end()
})
