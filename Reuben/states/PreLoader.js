var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Reuben;
(function (Reuben) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            //  Load our actual games assets
            this.load.image('bigbadguy', 'assets/bigbadguy.png');
            this.load.image('enemybullet', 'assets/enemybullet.png');
            this.load.image('explosion', 'assets/explosion.png');
            this.load.image('level1_background', 'assets/level1_background.png');
            this.load.image('menu_background', 'assets/menu_background.png');
            this.load.image('player', 'assets/player.png');
            this.load.image('playerbullet', 'assets/playerbullet.png');
            this.load.image('smallbadguy', 'assets/smallbadguy.png');
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start(Reuben.StateConstants.level1, true, false);
        };
        return Preloader;
    }(Phaser.State));
    Reuben.Preloader = Preloader;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=PreLoader.js.map