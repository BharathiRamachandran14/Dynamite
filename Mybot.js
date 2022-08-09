class Bot {
    makeMove(gamestate) {
        let numberOfRounds = gamestate.rounds.length;
        let play='';
        for (let i = 0; i < numberOfRounds; i++) {
            if (gamestate.rounds[i].p2 === 'R'){
                play='P';
            }else if(gamestate.rounds[i].p2===)
        }
        return 'R';
    }
}

module.exports = new Bot();