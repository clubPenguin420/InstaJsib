var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: {
        preload: init,
        create: create,
        update: ontick
    }
};

var game = new Phaser.Game(config);

function init() {
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('player', 'assets/player.png');
    this.load.spritesheet('enemy', 'assets/enemy.png');
    this.load.spritesheet('cpu', 'assets/enemygreyscale.png');
}

function create() {
    this.add.image(640, 480, 'background');
}

function ontick() {

}