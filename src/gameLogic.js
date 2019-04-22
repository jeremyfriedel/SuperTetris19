import * as binding from "./logic/binding";

class GameLogic {

    constructor() {
        this.binding = binding.binding.bind(this);
        this.binding();

    }


    // git subtree push --prefix dist origin gh-pages

}

export default GameLogic;