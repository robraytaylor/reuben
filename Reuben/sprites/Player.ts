module Reuben {

    export class Player extends Phaser.Sprite {

        weapon : PlayerWeapon;

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, "player", 0);

            this.anchor.setTo(0.5, 0);
            this.scale.setTo(0.5, 0.5);

            game.add.existing(this);
            game.physics.arcade.enable(this);
            this.body.collideWorldBounds = true;

            this.weapon = new PlayerWeapon(game);
        }


        update() : void {
            this.updateVelocity();

            if (isKeyDown(this.game, [Phaser.Keyboard.ENTER])) {
                this.weapon.fire(new Phaser.Point(this.x + 70, this.y + 45));
                console.log("fire");
            }
        }

        updateVelocity() : void {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;

            if (isKeyDown(this.game, [Phaser.Keyboard.LEFT, Phaser.Keyboard.A])) {
                this.body.velocity.x += SpriteConstants.baseVelocity * -1;
            }
            if (isKeyDown(this.game, [Phaser.Keyboard.RIGHT, Phaser.Keyboard.D])) {
                this.body.velocity.x += SpriteConstants.baseVelocity;
            }

            if (isKeyDown(this.game, [Phaser.Keyboard.UP, Phaser.Keyboard.W])) {
                this.body.velocity.y = SpriteConstants.baseVelocity * -1;
            }
            if (isKeyDown(this.game, [Phaser.Keyboard.DOWN, Phaser.Keyboard.S])) {
                this.body.velocity.y = SpriteConstants.baseVelocity;
            }
        }

    }

}