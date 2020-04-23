import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape = generateNewShape(grid.cells);
let movement = new Movement(shape, grid.cells);

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            shape.rotate();
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
    if(movement.canMove) {
        movement.down();
        console.log('Moving');
    } else {
        console.log('Stopped');
        clearInterval(intervalId);
        shape = generateNewShape(grid.cells);
        intervalId = setInterval(animate, 200);
    }
}

let intervalId = setInterval(animate, 200);




