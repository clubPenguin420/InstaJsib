//var http = require('http');
//var Phaser = require('./phaser/src/phaser-arcade-physics.js')

var width = 640;
var height = 480;

var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
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
    /*var keys = this.scene.input.keyboard.addKeys({
        up: 'w',
        down: 's',
        left: 'a',
        right: 'd'
    });*/

    this.load.image('background', './assets/background.png');
    this.load.image('player', './assets/player.png');
    this.load.image('enemy', './assets/enemy.png');
    this.load.image('cpu', './assets/cpu.png');
    //this.load.spritesheet('wall', './assets/cover.png', 32, 32);
    this.load.image('wall', './assets/cover.png');
    var shiftstate, spacestate, wstate, astate, sstate, dstate, ustate, hstate, jstate, kstate = false;
}

function create() {
    this.add.image(320, 240, 'background');

    cover = this.physics.add.staticGroup();
    for (i = 16; i < width; i+=32) {
        cover.create(i, 0, "wall");
        cover.create(i, 480, "wall");
    }
    for (i = 16; i < height; i += 32) {
        cover.create(0, i, "wall");
        cover.create(640, i, "wall");
    }

    /*var wkey = this.input.keyboard.addKey(this.Keyboard.W);
    var akey = this.input.keyboard.addKey(this.Keyboard.A);
    var skey = this.input.keyboard.addKey(this.Keyboard.S);
    var dkey = this.input.keyboard.addKey(this.Keyboard.D);*/

    this.input.keyboard.on('keydown', function (event) {
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.SHIFT) {
            shiftstate = true;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.SPACE) {
            spacestate = true;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.W) {
            wstate = true;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.A) {
            astate = true;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.S) {
            sstate = true;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.D) {
            dstate = true;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.U) {
            ustate = true;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.J) {
            jstate = true;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.H) { //im sorry i messed up and thought making a comment was faster
            hstate = true;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.K) {
            kstate = true;
        }
        console.log("recieved keydown " + event.keyCode);
    });
    this.input.keyboard.on('keyup', function (event) {
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.SHIFT) {
            shiftstate = false;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.SPACE) {
            spacestate = false;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.W) {
            wstate = false;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.A) {
            astate = false;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.S) {
            sstate = false;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.D) {
            dstate = false;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.U) {
            ustate = false;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.J) {
            jstate = false;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.H) { //im sorry i messed up and thought making a comment was faster
            hstate = false;
        }
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.K) {
            kstate = false;
        }
        console.log("recieved keyup " + event.keyCode);
    });

    var spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

function update() {

}