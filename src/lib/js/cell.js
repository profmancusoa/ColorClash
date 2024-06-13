const STATUS_OFF = 'off';
const STATUS_ON = 'on';
const STATUS_EMPTY = 'empty';

export class Cell {
    #r = 0; // cell's coordinates
    #c = 0;
    #type = 1;  // type of cell (1..3 as we have 3 colors)
    #status = STATUS_OFF; // imagine a cell can be ON (light color) and off (dark color) or empty


    constructor(r, c, type) {
        this.#type = type;
        this.#r = r;
        this.#c = c;
    }

    get row() {
        return this.#r;
    }

    set row(r) {
        this.#r = r;
    }

    get col() {
        return this.#c;
    }

    set col(c) {
        this.#c = c;
    }

    get type() {
        return this.#type;
    }

    set type(type) {
        this.#type = type;
    }

    get status() {
        return this.#status;
    }

    set status(status) {
        this.#status = status;
    }

    static get  STATUS_OFF() {
        return STATUS_OFF;
    }

    static get  STATUS_ON() {
        return STATUS_ON;
    }

    static get STATUS_EMPTY() {
        return STATUS_EMPTY;
    }
}