import { Grid } from './grid.js';
import { Movement } from './utils/movement.js';
import { generateNewShape, getRandomInt, shapeIndex } from './utils/shape-generator.js';
import { DOMHelper } from './utils/DOMHelper.js';

const rows = 20,
    columns = 10,
    grid = new Grid(rows, columns, 'content'),
    nextShapeGrid = new Grid(4, 5, 'nextShape')
    ;
let tetrisScore = 0, linesNumber = 0, intervalId, nextShapeIndex, nextShape, shape, movement;

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            movement.rotate();
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            movement.left();
            console.log('left');
            break;
        case 'ArrowRight':
            movement.right();
            console.log('right');
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red'];
            console.log(getRandomInt(colors.length - 1));
            shape.color = colors[getRandomInt(colors.length - 1)];
            shape.draw();
            break;
    }
});


const animate = () => {
    if (movement && movement.canMove) {
        movement.down(intervalId);
        console.log('Moving');
    } else {
        console.log('Stopped');
        clearInterval(intervalId);

        //Score
        let score = grid.score();
        if (score > 0) {
            tetrisScore += score;
            linesNumber = tetrisScore / 10;
            DOMHelper.setLines(linesNumber);
            DOMHelper.setScore(tetrisScore);
            grid.draw();
        }

        shape = generateNewShape(grid.cells, nextShapeIndex);
        nextShapeIndex = shapeIndex();
        DOMHelper.setBackground(shape.color);

        nextShape && nextShape.clear();
        nextShape = generateNewShape(nextShapeGrid.cells, nextShapeIndex);
        nextShape.draw();
        movement = new Movement(shape, grid.cells);
        intervalId = setInterval(animate, 200);
    }
}

document.getElementById('startGame').addEventListener('click', () => {
    DOMHelper.disableStartButton();
    grid.create();
    grid.draw();
    intervalId = setInterval(animate, 200);
});




