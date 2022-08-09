class Bot {
    makeMove(gamestate) {
        let randomNumber=Math.floor(Math.random()*5);
        if(randomNumber===0){
            return 'R';
        }else if(randomNumber===1){
            return 'P';
        }else if(randomNumber===2){
            return 'S';
        }else if(randomNumber===3){
            return 'D';
        }        
        else if(randomNumber===6){
            return 'W';
        }
    }
}

module.exports = new Bot();