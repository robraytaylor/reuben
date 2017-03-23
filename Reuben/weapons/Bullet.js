var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Reuben;
(function (Reuben) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet(game, assetKey) {
            _super.call(this, game, 0, 0, assetKey);
            this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
            this.anchor.set(0.5);
            this.checkWorldBounds = true;
            this.outOfBoundsKill = true;
            this.exists = false;
        }
        Bullet.prototype.fire = function (x, y, angle, speed, gx, gy) {
            gx = gx || 0;
            gy = gy || 0;
            this.reset(x, y);
            this.scale.set(1);
            this.game.physics.arcade.velocityFromAngle(angle, speed, this.body.velocity);
            this.angle = angle;
            this.body.gravity.set(gx, gy);
        };
        ;
        return Bullet;
    }(Phaser.Sprite));
    Reuben.Bullet = Bullet;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=Bullet.js.map