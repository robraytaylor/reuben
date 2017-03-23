var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Reuben;
(function (Reuben) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
            this.spawnRate = 2000;
            this.nextSpawn = Date.now();
        }
        Level1.prototype.create = function () {
            this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'level1_background');
            this.background.autoScroll(-60, 0);
            this.player = new Reuben.Player(this.game, 130, 284);
            //TODO: create all enemy objects on level load so game runs faster.
        };
        Level1.prototype.update = function () {
            if (this.nextSpawn > Date.now()) {
                return;
            }
            var enemySprites = ["smallbadguy", "bigbadguy"];
            var enemy = new Reuben.BadGuy(this.game, this.game.width - 1, this.game.rnd.between(0, this.game.height - 100), enemySprites[this.game.rnd.between(0, 1)], this.player);
            this.nextSpawn = Date.now() + this.spawnRate;
        };
        return Level1;
    }(Phaser.State));
    Reuben.Level1 = Level1;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=Level1.js.map