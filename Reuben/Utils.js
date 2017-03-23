var Reuben;
(function (Reuben) {
    function isKeyDown(game, keyArray) {
        for (var _i = 0, keyArray_1 = keyArray; _i < keyArray_1.length; _i++) {
            var key = keyArray_1[_i];
            if (game.input.keyboard.isDown(key)) {
                return true;
            }
        }
        return false;
    }
    Reuben.isKeyDown = isKeyDown;
})(Reuben || (Reuben = {}));
//# sourceMappingURL=Utils.js.map