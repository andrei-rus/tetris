import { I } from "../i-shape.js";
import { J } from "../j-shape.js";
import { L } from "../l-shape.js";
import { O } from "../o-shape.js";
import { S } from "../s-shape.js";
import { T } from "../t-shape.js";
import { Z } from "../z-shape.js";

export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const generateNewShape = (cells) => {
    const index = getRandomInt(7);
    switch (index) {
        case 0:
            return new I(0, 4, cells);
        case 1:
            return new J(0, 4, cells);
        case 2:
            return new L(0, 4, cells);
        case 3:
            return new O(0, 4, cells);
        case 4:
            return new S(0, 4, cells);
        case 5:
            return new Z(0, 4, cells);
        case 6:
            return new T(0, 4, cells);
    }
}