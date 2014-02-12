function PlainTerrain() {
  if (!(this instanceof PlainTerrain)) return new PlainTerrain();
}
module.exports = PlainTerrain;

PlainTerrain.prototype.generateChunk = function (position, width, height) {
  var startX = position[0] * width;
  var startY = position[1] * width;
  var startZ = position[2] * width;
  var chunk = new Int8Array(width * width * width);

  this._pointsInside(startX, startZ, width, function(x, z) {
    var y = height;

    if (startY < y && y < startY + width) {
      var xidx = Math.abs((width + x % width) % width);
      var yidx = Math.abs((width + y % width) % width);
      var zidx = Math.abs((width + z % width) % width);

      var idx = xidx + yidx * width + zidx * width * width;
      chunk[idx] = (Math.random() * 2) + 1;
    }
  });

  return chunk;
};

PlainTerrain.prototype._pointsInside = function (startX, startZ, width, func) {
  for (var x = startX; x <= startX + width; x++) {
    for (var z = startZ; z <= startZ + width; z++) {
      func(x, z);
    }
  }
};
