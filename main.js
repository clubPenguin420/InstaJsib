var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

var game = new Phaser.Game(config);

var cover;

function preload() {
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('player', 'assets/player.png');
    this.load.spritesheet('enemy', 'assets/enemy.png');
    this.load.spritesheet('cpu', 'assets/enemygreyscale.png');
    this.load.spritesheet('wall', 'assets/cover.png');
}

function create() {
    this.add.image(320, 240, imgbackground);

    cover = this.physics.add.staticGroup();
    cover.create(400, 320, 'wall');
    cover.create(100, 200, 'wall');
}

function update() {

}