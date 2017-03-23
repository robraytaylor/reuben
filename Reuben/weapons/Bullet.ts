module Reuben {
    export class Bullet extends  Phaser.Sprite {

        constructor(game : Phaser.Game, assetKey : string ) {
            super(game, 0, 0, assetKey);

            this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

            this.anchor.set(0.5);

            this.checkWorldBounds = true;
            this.outOfBoundsKill = true;
            this.exists = false;
        }
    

    fire(x : number, y : number, angle : number, speed : number, gx? : number, gy? : number) {

        gx = gx || 0;
        gy = gy || 0;

        this.reset(x, y);
        this.scale.set(1);

        this.game.physics.arcade.velocityFromAngle(angle, speed, this.body.velocity);

        this.angle = angle;

        this.body.gravity.set(gx, gy);
    };
    }
}