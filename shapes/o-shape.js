export class O {
    constructor(row, column, cells) {
        this.row = row;
        this.column = column;
        this.cells = cells;
        //TODO - why const.
        this.template = [
            this.cells[this.row][this.column],
            this.cells[this.row][this.column + 1],
            this.cells[this.row + 1][this.column],
            this.cells[this.row + 1][this.column + 1]
        ];
        this.color = 'yellow';
    }

    draw() {
        this.template.forEach(cell => {
            cell.draw(this.color);
        });
    }

    moveUp() {
        this.row--;
    }

    moveDown() {
        this.row++;
    }

    moveLeft() {
        this.column--;
    }

    moveRight() {
        this.column++;
    }
}