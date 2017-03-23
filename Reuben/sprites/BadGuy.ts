module Reuben {
    export class BadGuy extends Phaser.Sprite {

        private player: Player;
        private isExploded = false;

        constructor(game: Phaser.Game, x: number, y: number, assetKey : string, player : Player) {
            
            super(game, x, y, assetKey, 0);

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
}