import { I } from "../shapes/i-shape.js";
import { J } from "../shapes/j-shape.js";
import { L } from "../shapes/l-shape.js";
import { O } from "../shapes/o-shape.js";
import { S } from "../shapes/s-shape.js";
import { T } from "../shapes/t-shape.js";
import { Z } from '../shapes/z-shape.js'

export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const shapeIndex = () => getRandomInt(1, 7);

export const generateNewShape = (cells, index) => {
    const column = Math.floor(cells[0].length / 2);
    !index && (index = shapeIndex());
    switch (index) {
        case 1:
            return new I(0, column, cells);
        case 2:
            return new J(0, column, cells);
        case 3:
            return new L(0, column, cells);
        case 4:
            return new O(0, column, cells);
        case 5:
            return new S(0, column, cells);
        case 6:
            return new Z(0, column, cells);
        case 7:
            return new T(0, column, cells);
    }
}