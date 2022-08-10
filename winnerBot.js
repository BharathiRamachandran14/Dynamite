class Bot {
    makeMove(gamestate) {
        let result = "";

        if (gamestate.rounds.length === 0) {
            this.dynamite = 100;
            this.round = 0;
            this.rocksPlayed = 0;
            this.paperPlayed = 0;
            this.sissorPlayed = 0;
            this.waterBombsPlayed = 0;

        }
        //console.log(this.round);


        if (gamestate.rounds.length > 0) {
            //console.log(gamestate.rounds[this.round-1].p2);
            if (gamestate.rounds[this.round - 1].p2 === 'R')
                this.rocksPlayed++;
            else if (gamestate.rounds[this.round - 1].p2 === 'P')
                this.paperPlayed++;
            else if (gamestate.rounds[this.round - 1].p2 === 'S')
                this.sissorPlayed++;
            else if (gamestate.rounds[this.round - 1].p2 === 'W')
                this.waterBombsPlayed++;



        }
        if (this.rocksPlayed > this.paperPlayed || this.rocksPlayed > this.sissorPlayed || this.rocksPlayed > this.waterBombsPlayed) {
            return 'P';
        } else if (this.paperPlayed > this.rocksPlayed || this.paperPlayed > this.sissorPlayed || this.paperPlayed > this.waterBombsPlayed) {
            return 'S';
        } else if (this.sissorPlayed > this.rocksPlayed || this.sissorPlayed > this.paperPlayed || this.sissorPlayed > this.waterBombsPlayed) {
            return 'R';
        }
        this.round++;

        if (Math.floor(Math.random() * 5) === 5) {
            if (this.dynamite > 0 && this.dynamite <= 100) {
                this.dynamite--;
                return 'D';
            }
        }
        else {
            let char = "PWRS";
            result = char.charAt(Math.floor(Math.random() * 4));
            return result;
        }

    }
}

module.exports = new Bot();
