// import KeyHashing from './input';
// import CanvasDraw from './canvas';
import GameLogic from './gameLogic';



class Game {
    constructor(){
        document.addEventListener('DOMContentLoaded', (event) => {
            const game = new GameLogic();
        });
    }
}

export default Game;