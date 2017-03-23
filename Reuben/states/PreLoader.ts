module Reuben {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

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

            this.game.state.start(StateConstants.level1, true, false);

        }

    }

}