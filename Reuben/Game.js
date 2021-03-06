var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Reuben;
(function (Reuben) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add(Reuben.StateConstants.boot, Reuben.Boot, false);
            this.state.add(Reuben.StateConstants.preloader, Reuben.Preloader, false);
            this.state.add(Reuben.StateConstants.mainmenu, Reuben.MainMenu, false);
            this.state.add(Reuben.StateConstants.level1, Reuben.Level1, false);
            this.state.start(Reuben.StateConstants.boot);
        }
        return Game;
    }(Phaser.Game));
    Reuben.Game = Game;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=Game.js.map