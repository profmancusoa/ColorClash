import { Cell } from "./cell"; 

const DESKTOP_ROW = 10;
const DESKTOP_COL = 15;
const MOBILE_ROW = 15;
const MOBILE_COL = 10;

class Board {
    #COLORS = 3;
    #board = [0][0];
    #rows = 0;
    #cols = 0;

    constructor(r, c) {
        this.#board = [...Array(r)].map(x => [...Array(c)].map(b => new Cell(this.#random())));
        this.#rows = r;
        this.#cols = c;
    }

    #random() {  
        return Math.floor(Math.random() * this.#COLORS) + 1;
    }

    get rows() {
        return this.#rows;
    }

    get cols() {
        return this.#cols;
    }

    getCell(r, c) {
        return this.#board[r][c];
    }

    refresh() {
        this.#board[0] = [...this.#board[0]];
        console.log("REFRESH")
    }
}

export class desktopBoard extends Board {
    constructor() {
        super(DESKTOP_ROW, DESKTOP_COL);
    }
}

export class mobileBoard extends Board {
    constructor() {
        super(MOBILE_ROW, MOBILE_COL);
    }
}