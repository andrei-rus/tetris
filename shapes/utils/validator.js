export class Validator {
    constructor(shape, cells) {
        this.shape = shape;
        this.cells = cells;
    }

    checkNext(shapeRaw, shapeColumn) {
        for (let row = 0; row < this.shape.template.length; row++) {
            for (let column = 0; column < this.shape.template[row].length; column++) {
                let cell =
                    this.cells[row + shapeRaw]
                    && this.cells[row + shapeRaw][column + shapeColumn];

                if(!cell) {
                    return true; // nextNotAvailable
                }

                let isEmpty = cell.isEmpty;

                if(this.shape.template[row][column] === 1 && !isEmpty) {
                    return true;
                }
            }
        }

        return false;
    }

    draw() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw(this.color);
                }
            }
        }
    }
}