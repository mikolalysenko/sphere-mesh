"use strict"

var cubeMesh = require("cube-mesh")

//Creates a spherical mesh
//  resolution is an integer representing number of (vertices/6)^(1/2)
//  radius is the radius of the sphere
function sphereMesh(resolution, radius) {
  var base = cubeMesh(resolution)
    , i, j, p, l
  if(!radius) {
    radius = 1.0
  }
  for(i=0; i<base.positions.length; ++i) {
    p = base.positions[i]
    l = 0.0
    for(j=0; j<3; ++j) {
      l += p[j] * p[j]
    }
    l = radius / Math.sqrt(l);
    for(j=0; j<3; ++j) {
      p[j] *= l
    }
  }
  return base
}

module.exports = sphereMesh