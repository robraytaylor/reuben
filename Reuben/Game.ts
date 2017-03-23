module Reuben {
    export class Game extends Phaser.Game {
        constructor() {

            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add(StateConstants.boot, Boot, false);
            this.state.add(StateConstants.preloader, Preloader, false);
            this.state.add(StateConstants.mainmenu, MainMenu, false);
            this.state.add(StateConstants.level1, Level1, false);

            this.state.start(StateConstants.boot);

        }
    }
}