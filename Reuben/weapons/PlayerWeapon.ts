module Reuben {
    export class PlayerWeapon extends Phaser.Group {

        nextFire = 0;
        bulletSpeed = 600;
        fireRate = 200;

        constructor(game: Phaser.Game) {
            super(game, game.world, "PlayerWeapon", false, true, Phaser.Physics.ARCADE);

            for (var i = 0; i < 64; i++) {
                this.add(new Bullet(game, "playerbullet"), true);
            }

        }

        fire(source: Phaser.Point) {

            if (this.game.time.time < this.nextFire) {
                return;
            }

            this.getFirstExists(false).fire(source.x, source.y, 0, this.bulletSpeed, 0, 0);

            this.nextFire = this.game.time.time + this.fireRate;

        }
    }
}