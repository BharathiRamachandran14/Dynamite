class Bot {
    makeMove(gamestate) {
        let result = "";
        if(gamestate.rounds.length === 0) {
            this.dynamite = 100;
        }
        if(this.dynamite>0 && this.dynamite<=100){
            this.dynamite--;
            return 'D';
        }
        else {
        let char = "PRWS";
        result = char.charAt(Math.floor(Math.random() * 4));
        return result;
        }
    }
}

module.exports = new Bot();
