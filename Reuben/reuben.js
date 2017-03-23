window.onload = () => {
    var game = new Reuben.Game();
};
var Reuben;
(function (Reuben) {
    class Game extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);
            this.state.add(Reuben.StateConstants.boot, Reuben.Boot, false);
            this.state.add(Reuben.StateConstants.preloader, Reuben.Preloader, false);
            this.state.add(Reuben.StateConstants.mainmenu, Reuben.MainMenu, false);
            this.state.add(Reuben.StateConstants.level1, Reuben.Level1, false);
            this.state.start(Reuben.StateConstants.boot);
        }
    }
    Reuben.Game = Game;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    class BadGuy extends Phaser.Sprite {
        constructor(game, x, y, assetKey, player) {
            super(game, x, y, assetKey, 0);
            this.isExploded = false;
            this.player = player;
            this.anchor.setTo(0.5, 0);
            this.scale.setTo(0.5, 0.5);
            game.add.existing(this);
            game.physics.arcade.enable(this);
            this.body.velocity.x = -100;
            this.outOfBoundsKill = true;
        }
        update() {
            this.game.physics.arcade.overlap(this.player.weapon, this, this.explode, null, this);
        }
        explode() {
            this.loadTexture("explosion");
        }
    }
    Reuben.BadGuy = BadGuy;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    class Player extends Phaser.Sprite {
        constructor(game, x, y) {
            super(game, x, y, "player", 0);
            this.anchor.setTo(0.5, 0);
            this.scale.setTo(0.5, 0.5);
            game.add.existing(this);
            game.physics.arcade.enable(this);
            this.body.collideWorldBounds = true;
            this.weapon = new Reuben.PlayerWeapon(game);
        }
        update() {
            this.updateVelocity();
            if (Reuben.isKeyDown(this.game, [Phaser.Keyboard.ENTER])) {
                this.weapon.fire(new Phaser.Point(this.x + 70, this.y + 45));
                console.log("fire");
            }
        }
        updateVelocity() {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            if (Reuben.isKeyDown(this.game, [Phaser.Keyboard.LEFT, Phaser.Keyboard.A])) {
                this.body.velocity.x += Reuben.SpriteConstants.baseVelocity * -1;
            }
            if (Reuben.isKeyDown(this.game, [Phaser.Keyboard.RIGHT, Phaser.Keyboard.D])) {
                this.body.velocity.x += Reuben.SpriteConstants.baseVelocity;
            }
            if (Reuben.isKeyDown(this.game, [Phaser.Keyboard.UP, Phaser.Keyboard.W])) {
                this.body.velocity.y = Reuben.SpriteConstants.baseVelocity * -1;
            }
            if (Reuben.isKeyDown(this.game, [Phaser.Keyboard.DOWN, Phaser.Keyboard.S])) {
                this.body.velocity.y = Reuben.SpriteConstants.baseVelocity;
            }
            //this flips the image so its facing the right way
            //if ((this.body.velocity.x > 0 && this.scale.x < 0) || (this.body.velocity.x < 0 && this.scale.x > 0)) {
            //    this.scale.x = this.scale.x * -1;
            //}
        }
    }
    Reuben.Player = Player;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    class Boot extends Phaser.State {
        preload() {
            this.load.image('preloadBar', 'assets/loader.png');
        }
        create() {
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;
            //load physics engine
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.state.start(Reuben.StateConstants.preloader, true, false);
        }
    }
    Reuben.Boot = Boot;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    class Level1 extends Phaser.State {
        constructor(...args) {
            super(...args);
            this.spawnRate = 2000;
            this.nextSpawn = Date.now();
        }
        create() {
            this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'level1_background');
            this.background.autoScroll(-60, 0);
            this.player = new Reuben.Player(this.game, 130, 284);
            //TODO: create all enemy objects on level load so game runs faster.
        }
        update() {
            if (this.nextSpawn > Date.now()) {
                return;
            }
            const enemySprites = ["smallbadguy", "bigbadguy"];
            var enemy = new Reuben.BadGuy(this.game, this.game.width - 1, this.game.rnd.between(0, this.game.height - 100), enemySprites[this.game.rnd.between(0, 1)], this.player);
            this.nextSpawn = Date.now() + this.spawnRate;
        }
    }
    Reuben.Level1 = Level1;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    class MainMenu extends Phaser.State {
        create() {
            this.background = this.add.sprite(0, 0, 'menu_background');
            this.background.alpha = 0;
            //this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            //this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            //this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        }
        fadeOut() {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            //var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            //tween.onComplete.add(this.startGame, this);
            this.startGame();
        }
        startGame() {
            this.game.state.start(Reuben.StateConstants.level1, true, false);
        }
    }
    Reuben.MainMenu = MainMenu;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    class Preloader extends Phaser.State {
        preload() {
            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            //  Load our actual games assets
            this.load.image('bigbadguy', 'assets/bigbadguy.png');
            this.load.image('enemybullet', 'assets/enemybullet.png');
            this.load.image('explosion', 'assets/explosion.png');
            this.load.image('level1_background', 'assets/level1_background.png');
            this.load.image('menu_background', 'assets/menu_background.png');
            this.load.image('player', 'assets/player.png');
            this.load.image('playerbullet', 'assets/playerbullet.png');
            this.load.image('smallbadguy', 'assets/smallbadguy.png');
        }
        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }
        startMainMenu() {
            this.game.state.start(Reuben.StateConstants.level1, true, false);
        }
    }
    Reuben.Preloader = Preloader;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    class StateConstants {
    }
    StateConstants.boot = "boot";
    StateConstants.preloader = "preloader";
    StateConstants.mainmenu = "mainmenu";
    StateConstants.level1 = "level1";
    Reuben.StateConstants = StateConstants;
    class SpriteConstants {
    }
    SpriteConstants.baseVelocity = 250;
    Reuben.SpriteConstants = SpriteConstants;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    function isKeyDown(game, keyArray) {
        for (let key of keyArray) {
            if (game.input.keyboard.isDown(key)) {
                return true;
            }
        }
        return false;
    }
    Reuben.isKeyDown = isKeyDown;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    class Bullet extends Phaser.Sprite {
        constructor(game, assetKey) {
            super(game, 0, 0, assetKey);
            this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
            this.anchor.set(0.5);
            this.checkWorldBounds = true;
            this.outOfBoundsKill = true;
            this.exists = false;
        }
        fire(x, y, angle, speed, gx, gy) {
            gx = gx || 0;
            gy = gy || 0;
            this.reset(x, y);
            this.scale.set(1);
            this.game.physics.arcade.velocityFromAngle(angle, speed, this.body.velocity);
            this.angle = angle;
            this.body.gravity.set(gx, gy);
        }
        ;
    }
    Reuben.Bullet = Bullet;
})(Reuben || (Reuben = {}));
var Reuben;
(function (Reuben) {
    class PlayerWeapon extends Phaser.Group {
        constructor(game) {
            super(game, game.world, "PlayerWeapon", false, true, Phaser.Physics.ARCADE);
            this.nextFire = 0;
            this.bulletSpeed = 600;
            this.fireRate = 200;
            for (var i = 0; i < 64; i++) {
                this.add(new Reuben.Bullet(game, "playerbullet"), true);
            }
        }
        fire(source) {
            if (this.game.time.time < this.nextFire) {
                return;
            }
            this.getFirstExists(false).fire(source.x, source.y, 0, this.bulletSpeed, 0, 0);
            this.nextFire = this.game.time.time + this.fireRate;
        }
    }
    Reuben.PlayerWeapon = PlayerWeapon;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=reuben.js.map