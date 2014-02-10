var createGame = require('voxel-engine');
var terrain = require('../');

var game = createGame({
  generateChunks: false,
  chunkDistance: 2,
  materials: [['grass', 'dirt', 'grass_dirt'], 'dirt'],
  texturePath: 'textures/'
});
var container = document.body;
game.appendTo(container);

// create a player
var createPlayer = require('voxel-player')(game);
var shama = createPlayer('textures/shama.png');
shama.yaw.position.set(0, 3, 0);
shama.possess();

// Generate terrain
var generateChunk = terrain();

game.voxels.on('missingChunk', function(p) {
  var voxels = generateChunk(p, 32, 2);
  var chunk = {
    position: p,
    dims: [32, 32, 32],
    voxels: voxels
  };

  game.showChunk(chunk);
});
