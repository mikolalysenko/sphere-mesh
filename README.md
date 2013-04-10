sphere-mesh
===========
Generates a subdivided spherical mesh, useful for testing purposes or just for creating an object for display.

Install:
========

    npm install sphere-mesh
    
Usage
=====
```javascript
var resolution = 10
var radius = 10

var mesh = require("sphere-mesh")(resolution, radius)
```

### `require("sphere-mesh")([resolution, radius])`
Creates a spherical mesh from a subdivided cube

* `resolution` is the resolution of the mesh
* `radius` is the radius of the sphere to generate (Default 1)

**Returns** A simplicial complex represented as a json object with two properties:

* `positions` the positions of the spherical mesh
* `cells` the cells of the spherical mesh

Credits
=======
(c) 2013 Mikola Lysenko. MIT License
