import * as draw from "../presentation/draw";
import * as pieces from "./pieces";
import * as render from "../presentation/render";
import * as collision from "./collision";
import * as reset from "./reset";
import * as music from "../presentation/music";
import * as input from "../presentation/input";
import * as save from "./save";
import * as lines from "./lines";
import * as score from "../presentation/score";
import * as presets from "./presets";


export const binding = function () {

    let importArr = [draw, pieces, render, collision, reset, music, input, save, lines, score, presets];
    // bind everything
    for (let keyClass in importArr) {
        for (let keyFunc in importArr[keyClass]) {
            if (typeof importArr[keyClass][keyFunc] === 'function') {
                this[keyFunc] = importArr[keyClass][keyFunc].bind(this);
            } else {
                this[keyFunc] = importArr[keyClass][keyFunc];
            }
        }
    }
    this.startup();

};