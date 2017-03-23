var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Reuben;
(function (Reuben) {
    var PlayerWeapon = (function (_super) {
        __extends(PlayerWeapon, _super);
        function PlayerWeapon(game) {
            _super.call(this, game, game.world, "PlayerWeapon", false, true, Phaser.Physics.ARCADE);
            this.nextFire = 0;
            this.bulletSpeed = 600;
            this.fireRate = 200;
            for (var i = 0; i < 64; i++) {
                this.add(new Reuben.Bullet(game, "playerbullet"), true);
            }
        }
        PlayerWeapon.prototype.fire = function (source) {
            if (this.game.time.time < this.nextFire) {
                return;
            }
            this.getFirstExists(false).fire(source.x, source.y, 0, this.bulletSpeed, 0, 0);
            this.nextFire = this.game.time.time + this.fireRate;
        };
        return PlayerWeapon;
    }(Phaser.Group));
    Reuben.PlayerWeapon = PlayerWeapon;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=PlayerWeapon.js.map