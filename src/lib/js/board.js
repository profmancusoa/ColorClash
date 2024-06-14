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

        //just for debug
        // this.#board[9][12].type = 2; //just for debug
        // this.#board[9][13].type = 3;
        // this.#board[9][14].type = 3;
        // this.#board[8][13].type = 3;
        // this.#board[8][14].type = 1;

        //1 blue
        //2 giallo
        //3 rosso
        // this.#board[0][0].type = 1;
        // this.#board[0][1].type = 1;
        // this.#board[0][2].type = 3;
        // this.#board[0][3].type = 3;
        // this.#board[0][4].type = 3 ;

        // this.#board[1][0].type = 2;
        // this.#board[1][1].type = 3;
        // this.#board[1][2].type = 2;
        // this.#board[1][3].type = 1;
        // this.#board[1][4].type = 1;

        // this.#board[2][0].type = 2;
        // this.#board[2][1].type = 3;
        // this.#board[2][2].type = 2;
        // this.#board[2][3].type = 3;
        // this.#board[2][4].type = 3;

        // this.#board[3][0].type = 2;
        // this.#board[3][1].type = 2;
        // this.#board[3][2].type = 1;
        // this.#board[3][3].type = 3;
        // this.#board[3][4].type = 1;

        // this.#board[4][0].type = 3;
        // this.#board[4][1].type = 3;
        // this.#board[4][2].type = 1;
        // this.#board[4][3].type = 2;
        // this.#board[4][4].type = 3;
    
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
        console.log("REFRESH")
    }

    // #getNCell(r, c) {
    //     return this.getCell(r - 1, c); 
    // }

    // #getSCell(r, c) {
    //     return this.getCell(r + 1, c); 
    // }

    // #getECell(r, c) {
    //     return this.getCell(r , c + 1); 
    // }

    // #getWCell(r, c) {
    //     return this.getCell(r , c - 1); 
    // }

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
        // console.log("CLASH LIST ON:");
        // this.#preClash.forEach(c => console.log(c))
    }

    preClashOFF() {
        this.#preClash.map(c => c.status = Cell.STATUS_OFF);
        // console.log("CLASH LIST OFF:");
        // this.#preClash.forEach(c => console.log(c))
        this.#preClash.length = 0;
    }

    // preClash(r, c) {
    //     // console.log("PRE CLASH OF CELL:",r , c);
    //     this.#preClash.length = 0;
    //     let start = this.getCell(r, c); //initial cell from which start search of clashing cells
    //     let startType = start.type;
       
    //     let toVisit = new VistiList();
    //     let toClash = new VistiList();
    //     toVisit.add(start);

    //     while(toVisit.length > 0) {
    //         let neighbors = [];
    //         let current = toVisit.remove();
    //         let crow = current.row;
    //         let ccol = current.col;
    //         toClash.add(current);

    //         neighbors.push(this.#getNCell(crow, ccol));
    //         neighbors.push(this.#getSCell(crow, ccol));
    //         neighbors.push(this.#getECell(crow, ccol));
    //         neighbors.push(this.#getWCell(crow, ccol));

    //         neighbors.forEach(c => {
    //             if(c && 
    //                c.type == startType &&
    //                c.status != Cell.STATUS_EMPTY &&
    //                !toClash.has(c)
    //                )
    //                 toVisit.add(c);
    //         });
    //     }
        
    //     if(toClash.length > 1)
    //         this.#preClash = toClash;

    // }

    preClash(r, c) {
        // console.log("PRE CLASH OF CELL:",r , c);
        this.#preClash.length = 0;
        let toVisit = new VistiList();
        let toClash = new VistiList();

        let start = this.getCell(r, c); //initial cell from which start search of clashing cells
        let startType = start.type;
        toVisit.add(start);

        while(toVisit.length > 0) {
            let neighbors = [];
            let current = toVisit.remove();
            // let crow = current.row;
            // let ccol = current.col;
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
        console.log("CLASH CLASH CLASH")
        // console.log(this.#preClash)
        this.#preClash.map(c => {
            c.status = Cell.STATUS_EMPTY;
        })
        this.#preClash.length = 0;
        // this.shiftDown();
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

    swapCells(c1, c2) {
        //swap two cell of the board using a temp cell
        //it is very important to update row and col 
        // for the swapped cells
        // let cellTmp = c2;
        console.log("SWAP:", c1, c2)
        
        this.#board[c2.row][c2.col] = c1;
        this.#board[c1.row][c1.col] = c2;
        // let tmpR = c1.row;
        // let tmpC = c1.col;
        let [tmpR, tmpC] = [c1.row, c1.col];
        c1.row = c2.row;
        c1.col = c2.col;
        c2.row = tmpR;
        c2.col = tmpC;
        console.log("BOARD:", this.#board)
    }

    shiftDown() {
        // console.log("SHIFT DOWN:", this.#board[9])
        for(let r = this.#rows - 1; r > 0; r--) {
        // let r = 9;    
        console.log("SHIFT DOWN:", r);
            let emptyCells = this.#board[r].filter(c => c.status == Cell.STATUS_EMPTY);
            console.log("EMPTY:", emptyCells)
            emptyCells.forEach(c => {
                let topCell = this.findTop(c);
                if(topCell && topCell.status != Cell.STATUS_EMPTY)
                    this.swapCells(c, topCell);
            })
        }
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