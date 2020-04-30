export class DOMHelper {
    static enableStartButton() {
        document.getElementById('startGame').disabled = false;
    }

    static disableStartButton() {
        document.getElementById('startGame').disabled = true;
    }

    static setScore(score) {
        document.getElementById('score').innerHTML = score;
    }

    static setBackground(color) {
        document.body.style.background = `radial-gradient(${color}, transparent)`;
    }

    static setLines(lines) {
        document.getElementById('lines').innerHTML = lines;
    }
}