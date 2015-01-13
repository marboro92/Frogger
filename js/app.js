// each tile is 101px wide
var tileWidth = 101;
// each tile is 83px high
var tileHeight = 83;
// boundry location of the game character in the stage
var leftBoundry = tileWidth;
var upBoundry = tileHeight;
var rightBoundry = tileWidth * 3;
var downBoundry = tileHeight * 3;
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < tileWidth*6){
        this.x = this.x + ( 300 * dt );
    }
    else {
        this.x = 0;
    };
    if (player.x < this.x + tileWidth && 
        player.x + tileWidth > this.x &&
        player.y < this.y + tileHeight &&
        player.y + tileHeight > this.y){
            player.x=tileWidth*1;
            player.y=tileHeight*5;
    };
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
}
Player.prototype.update= function(){
}
Player.prototype.render= function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(key) {
    switch (key) {
        case "up":
            if (this.y < upBoundry) {
            } else {
                this.y = this.y - tileHeight;
            }
            break;
        case "down":
            if (this.y > downBoundry) {
            } else {
                this.y = this.y + tileHeight;
            }
            break;
        case "left":
            if (this.x < leftBoundry) {
            } else {
                this.x = this.x - tileWidth;
            }
            break;
        case "right":
            if (this.x > rightBoundry) {
            } else {
                this.x = this.x + tileWidth;
            }
            break;
        default:
            return;
    }
}


// Now instantiate your objects.
var enemy1 = new Enemy(0, 0);
var enemy2 = new Enemy(0, tileHeight*2);
var enemy3 = new Enemy(0, tileHeight*3);
// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];
// Place the player object in a variable called player
var player = new Player(tileWidth*1, tileHeight*5);
var allPlayers = [player];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
