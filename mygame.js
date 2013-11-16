var data = 
"2 2 222 222 222 2 2   333 3 333 333 3 3 33  333 3 3\n" +
"2 2 2 2 2 2 2 2 222   3 3 3 3 3  3  3 3 3 3 3 3 3 3\n" +
"222 222 222 222  2    33  3 33   3  333 3 3 333 333\n" +
"2 2 2 2 2   2    2    3 3 3 3 3  3  3 3 3 3 3 3  3 \n" +
"2 2 2 2 2   2    2    333 3 3 3  3  3 3 33  3 3  3 \n" +
"                                                   \n" +
"             44  444 4 4 4444  6                   \n" +
"             4 4 4 4 4 4 4     6                   \n" +
"             4 4 4 4 4 4 4 44  6                   \n" +
"             4 4 4 4 4 4 4  4                      \n" +
"             44  444 444 4444  6                   "

var textures = "http://commondatastorage.googleapis.com/voxeltextures/"
var lines = data.split("\n").reverse();
var lineLength = lines[0].length;
var createGame = require('voxel-hello-world');
var game = createGame({
	materials: [
    ['grass', 'dirt', 'grass_dirt'],
    'obsidian',
    'brick',
    'grass',
    'plank',
    'whitewool'
  ],
  materialFlatColor: false,
  texturePath: textures,
  generate: function (x,y,z) {
		// Make a floor
		if (y===0) {
			return 1;
		}
		if (y < 0) {
			return 0;
		}

		if (z > -15 && z < -13  && y <= lines.length && x+10 >= 0 && x+10 < lineLength) {
			var line = lines[y-1];
      		var block = line.substring(x+10,x+10+1);
	      	if (block !== ' ') {
	          return parseInt(block);
	        }  
	        return 0;
		}
		return 0;
	}
});
