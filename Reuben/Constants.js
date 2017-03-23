var Reuben;
(function (Reuben) {
    var StateConstants = (function () {
        function StateConstants() {
        }
        StateConstants.boot = "boot";
        StateConstants.preloader = "preloader";
        StateConstants.mainmenu = "mainmenu";
        StateConstants.level1 = "level1";
        return StateConstants;
    }());
    Reuben.StateConstants = StateConstants;
    var SpriteConstants = (function () {
        function SpriteConstants() {
        }
        SpriteConstants.baseVelocity = 250;
        return SpriteConstants;
    }());
    Reuben.SpriteConstants = SpriteConstants;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=Constants.js.map