module Reuben {

    export class Level1 extends Phaser.State {

        background: Phaser.TileSprite;
        player: Player;
        spawnRate = 2000;
        nextSpawn = Date.now();


        create() {

            this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'level1_background');
            this.background.autoScroll(-60,0);
            this.player = new Player(this.game, 130, 284);

            //TODO: create all enemy objects on level load so game runs faster.
        }

        update() {
            if (this.nextSpawn > Date.now()) {
                return;
            }

            const enemySprites = ["smallbadguy", "bigbadguy"];
            var enemy = new BadGuy(this.game,
                this.game.width - 1,
                this.game.rnd.between(0, this.game.height - 100),
                enemySprites[this.game.rnd.between(0, 1)], this.player);

            this.nextSpawn = Date.now() + this.spawnRate;
        }

    }

} 