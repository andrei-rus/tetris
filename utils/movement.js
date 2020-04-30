import { Validator } from "./validator.js";
import { DOMHelper } from "./DOMHelper.js";

export class Movement {
    constructor(shape, cells) {
        this.shape = shape;
        this.cells = cells;
        this.validator = new Validator(this.shape, this.cells);
        this.canMove = true;
    }

    up() {
        this.shape.row--;
    }

    down(intervalId) {
        const { row, column } = this.shape;

        this.shape.clear();
        const nextNotAvailable = this.validator.checkNext(row + 1, column);
        if (nextNotAvailable) {
            this.shape.draw();
            if (row === 0) {
                DOMHelper.enableStartButton();
                console.log('Game Over');
                clearInterval(intervalId);
            }
            this.canMove = false;
            return;
        }

        this.shape.row++;
        this.shape.draw();
    }

    left() {

        if (!this.canMove) {
            return;
        }
        const { row, column } = this.shape;

        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column - 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.column--;
        this.shape.draw();
    }

    right() {
        if (!this.canMove) {
            return;
        }

        const { row, column } = this.shape;

        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column + 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.column++;
        this.shape.draw();
    }

    rotate() {
        if (!this.canMove) {
            return;
        }
        const { row, column } = this.shape;

        this.shape.clear();
        const nextTemplate = this.shape.getTemplate(this.shape.templateIndex + 1);
        const nextNotAvailable = this.validator.checkNext(row, column, nextTemplate);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.rotate();
    }
}