//rows = height
//cols = width

function Board(x, y){
    this.cells = [];
    this.width = x;
    this.height = y;

    //inialize the 2d array
    for (let i = 0; i < x; i++){
        this.cells.push([])
        for (let j = 0; j < y; j++){
            this.cells[i].push( i*x+j)
        }
    }

    //move either a row or a col
    this.move = (axis, index, count) => {
        if (axis == 0) this.moveX((index+this.width)%this.width, count);
        else this.moveY((index+this.height)%this.height, count);
    }

    this.show = () => {
        console.log(this.cells);
    }

    this.moveX = (rowNum, count) => {
        const row = this.cells[rowNum];
        this.cells[rowNum] = row.map((cell, i) => row[(i+this.width*16-count)%this.width]);
    }

    this.moveY = (colNum, count) => {
        const col = [...Array(this.height)].map((_, i) => this.cells[i][colNum]);
        for (let i = 0; i < this.height; i++){
            this.cells[i][colNum] = col[(((i+this.height*16-count)%this.height)+this.height)%this.height];
        }
    }

    this.isSolved = () => {
        for (let [rowIndex, row] of this.cells.entries()){
            for (let [col, tile] of row.entries()){
                if (tile != rowIndex*row.length+col) return false;
            }
        }
        return true;
    }
}