export class VistiList extends Array {
    add(item) {
        if(item) this.push(item);
    }

    has(item) {
        return this.filter(element =>  element == item).length > 0 ;
    }

    remove() {
        return this.shift();
    }
}

