import KeyHashing from './input';
import CanvasDraw from './canvas';



class Game {
    constructor(){
        document.body.onkeydown = KeyHashing;
        
        const e = new CanvasDraw();
        e.render();
        //  setInterval(e.render, 1);

        

        
    }
}

export default Game;