"use strict"

var cubeMesh = require("cube-mesh")

//Creates a spherical mesh
//  resolution is an integer representing number of (vertices/6)^(1/2)
//  radius is the radius of the sphere
function sphereMesh(radius, resolution) {
  var base = cubeMesh(resolution)
  
  for(var i=0; i<base.positions.length; ++i) {
    var p = base.positions[i];
    var l = 0.0;
    for(var j=0; j<3; ++j) {
      l += p[j] * p[j];
    }
    l = radius / Math.sqrt(l);
    for(var j=0; j<3; ++j) {
      p[j] *= l;
    }
  }
  
  return base;
}

module.exports = sphereMesh