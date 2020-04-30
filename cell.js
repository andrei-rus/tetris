export class Cell {
    constructor(x, y, color, canvasId) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvasId = canvasId;
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.width = 30;
        this.height = 30;
        this.isEmpty = true;
    }

    draw() {
        this.context.beginPath();

        // Create gradient
        let gradient = this.context.createLinearGradient(
            this.y * this.width,
            this.x * this.width, 
            this.y * this.width + this.width,
            this.x * this.width + this.width
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "black");

        // Fill with gradient
        this.context.fillStyle = gradient;
        this.context.rect(this.y * this.height, this.x * this.width, this.width, this.height);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}