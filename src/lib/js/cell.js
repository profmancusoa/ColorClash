const STATUS_OFF = 'off';
const STATUS_ON = 'on';

export class Cell {
    #type = 1;
    #status = STATUS_OFF;

    constructor(type) {
        this.#type = type;
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
}