var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Reuben;
(function (Reuben) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, "player", 0);
            this.anchor.setTo(0.5, 0);
            this.scale.setTo(0.5, 0.5);
            game.add.existing(this);
            game.physics.arcade.enable(this);
            this.body.collideWorldBounds = true;
            this.weapon = new Reuben.PlayerWeapon(game);
        }
        Player.prototype.update = function () {
            this.updateVelocity();
            if (Reuben.isKeyDown(this.game, [Phaser.Keyboard.ENTER])) {
                this.weapon.fire(new Phaser.Point(this.x + 70, this.y + 45));
                console.log("fire");
            }
        };
        Player.prototype.updateVelocity = function () {
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
        };
        return Player;
    }(Phaser.Sprite));
    Reuben.Player = Player;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=Player.js.map