# voxel-plain-terrain

Voxel Plain terrain generator for [voxel.js](http://voxeljs.com).

# example

[View this example](http://netsensei.github.io/voxel-plain-terrain)

```js
var terrain = require('voxel-plain-terrain');

// Generate terrain
var generateChunk = terrain();
var dim = 32;
var floor = 2;

game.voxels.on('missingChunk', function(p) {
  var voxels = generateChunk(p, dim, floor);
  var chunk = {
    position: p,
    dims: [dim, dim, dim],
    voxels: voxels
  };

  game.showChunk(chunk);
});
```

# install

With [npm](https://npmjs.org) do:

```
npm install voxel-plain-terrain
```

Use [browserify](http://browserify.org) to `require('voxel-plain-terrain')`.

## release history
* 0.1.0 - initial release

## license

MIT License
