import Direction from "./direction.js";

class Snake {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.food = this.generateFood();
        this.direction = Direction.RIGHT;

        const initialSnakeCell = {
            row: Math.floor(rows / 2),
            column: Math.floor(columns / 2),
            color: "green"
        }

        this.body = [initialSnakeCell]
    }

    generateFood() {
        const randomRow = Math.floor(Math.random() * this.rows);
        const randomColumn = Math.floor(Math.random() * this.columns)
        const cell = {
            row: randomColumn,
            column: randomRow,
            color: "red"
        }

        return cell;
    }

    move() {
        const arrayLength = this.body.length;

        let newHead = { ...this.body[arrayLength - 1] };

        switch (this.direction) {
            case Direction.RIGHT:
                newHead.column++;
                break;
            case Direction.LEFT:
                newHead.column--;
                break;
            case Direction.UP:
                newHead.row--;
                break;
            case Direction.DOWN:
                newHead.row++;
                break;
        }

        if (newHead.column === -1) {
            newHead.column = this.columns - 1
        } else if (newHead.column === this.columns) {
            newHead.column = 0;
        } else if (newHead.row === this.rows) {
            newHead.row = 0;
        } else if (newHead.row === -1) {
            newHead.row = this.rows - 1
        }

        this.body.push(newHead);
        this.body.shift();
    }

    grow() {
        const tail = { ...this.body[0] }
        this.body.unshift(tail)
    }

    isEating() {
        const arrayLength = this.body.length;

        let head = { ...this.body[arrayLength - 1] };

        if (head.row === this.food.row && head.column === this.food.column) {
            return true;
        }
        return false;
    }

}

export default Snake;