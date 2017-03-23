module Reuben {
    export function isKeyDown(game : Phaser.Game, keyArray: number[]) : boolean {
        for (let key of keyArray) {
            if (game.input.keyboard.isDown(key)) {
                return true;
            }
        }
        return false;
    }
}