var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Reuben;
(function (Reuben) {
    var BadGuy = (function (_super) {
        __extends(BadGuy, _super);
        function BadGuy(game, x, y, assetKey, player) {
            _super.call(this, game, x, y, assetKey, 0);
            this.isExploded = false;
            this.player = player;
            this.anchor.setTo(0.5, 0);
            this.scale.setTo(0.5, 0.5);
            game.add.existing(this);
            game.physics.arcade.enable(this);
            this.body.velocity.x = -100;
            this.outOfBoundsKill = true;
        }
        BadGuy.prototype.update = function () {
            this.game.physics.arcade.overlap(this.player.weapon, this, this.explode, null, this);
        };
        BadGuy.prototype.explode = function () {
            this.loadTexture("explosion");
        };
        return BadGuy;
    }(Phaser.Sprite));
    Reuben.BadGuy = BadGuy;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=BadGuy.js.map