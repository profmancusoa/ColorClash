import { Cell } from "./cell.js"; 
import { VistiList } from "./visit_list.js";

const DESKTOP_ROW = 10;
const DESKTOP_COL = 15;
const MOBILE_ROW = 15;
const MOBILE_COL = 10;

class Board {
    #COLORS = 3;
    #board = [0][0];
    #rows = 0;
    #cols = 0;
    #preClash = new VistiList();

    constructor(r, c) {
        this.#board = [...Array(r)].map((row,i) => [...Array(c)].map((col,j) => new Cell(i, j, this.#random())));
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
        return r >= 0 && 
            r < this.#rows &&
            c >= 0 &&
            c < this.#cols ? this.#board[r][c] : null;
    }

    refresh() {
        this.#board[0] = [...this.#board[0]];
    }

    #getNCell(c) {
        return this.getCell(c.row - 1, c.col); 
    }

    #getSCell(c) {
        return this.getCell(c.row + 1, c.col); 
    }

    #getECell(c) {
        return this.getCell(c.row , c.col + 1); 
    }

    #getWCell(c) {
        return this.getCell(c.row , c.col - 1); 
    }

    preClashON() {
        this.#preClash.map(c => c.status = Cell.STATUS_ON);
    }

    preClashOFF() {
        this.#preClash.map(c => c.status = Cell.STATUS_OFF);
        this.#preClash.length = 0;
    }

    preClash(r, c) {
        this.#preClash.length = 0;
        let toVisit = new VistiList();
        let toClash = new VistiList();

        let start = this.getCell(r, c); //initial cell from which start search of clashing cells
        let startType = start.type;
        toVisit.add(start);

        while(toVisit.length > 0) {
            let neighbors = [];
            let current = toVisit.remove();
            if(!toClash.has(current))
                toClash.add(current);

            neighbors.push(this.#getNCell(current));
            neighbors.push(this.#getSCell(current));
            neighbors.push(this.#getECell(current));
            neighbors.push(this.#getWCell(current));

            neighbors.forEach(c => {
                if(c && 
                   c.type == startType &&
                   c.status != Cell.STATUS_EMPTY &&
                   !toClash.has(c)
                   )
                    toVisit.add(c);
            });
        }
        
        if(toClash.length > 1)
            this.#preClash = toClash;
    }

    clash() {
        let score = Math.pow((this.#preClash.length - 2),2);
        this.#preClash.map(c => {
            c.status = Cell.STATUS_EMPTY;
        });
        this.#preClash.length = 0;

        return score;
    }

    findTop(cell) {
        let rowCheck = cell.row - 1;
        while(rowCheck >= 0) {
            let topCell = this.getCell(rowCheck--, cell.col); 
            if(topCell.status != Cell.STATUS_EMPTY)
                return topCell;
        }
        return null;
    }

    findRight(cell) {
        let colCheck = cell.col + 1;
        while(colCheck <= this.#cols - 1) {
            let rightCell = this.getCell(cell.row, colCheck--); 
            if(rightCell.status != Cell.STATUS_EMPTY)
                return rightCell;
        }
        return null;
    }

    swapCells(c1, c2) {
        //swap two cell of the board using a temp cell
        //it is very important to update row and col 
        // for the swapped cells
        // let cellTmp = c2;        
        let [tmpR, tmpC] = [c1.row, c1.col];

        this.#board[c2.row][c2.col] = c1;
        this.#board[c1.row][c1.col] = c2;
        c1.row = c2.row;
        c1.col = c2.col;
        c2.row = tmpR;
        c2.col = tmpC;
    }

    shiftDown() {
        for(let r = this.#rows - 1; r > 0; r--) {
            let emptyCells = this.#board[r].filter(c => c.status == Cell.STATUS_EMPTY);
            emptyCells.forEach(c => {
                let topCell = this.findTop(c);
                if(topCell && topCell.status != Cell.STATUS_EMPTY)
                    this.swapCells(c, topCell);
            })
        }
    }

    shiftLeft() {
        let emptyCells = this.#board[this.#rows - 1].filter(c => c.status == Cell.STATUS_EMPTY);
        emptyCells.forEach(cell => {
            for(let c = cell.col; c < this.#cols - 1; c++) {
                for(let r = this.#rows - 1; r >= 0; r--) {
                    let leftCell = this.getCell(r, c);
                    let rightCell = this.getCell(r, c + 1);
                    this.swapCells(leftCell, rightCell);
                }
            }
        });
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