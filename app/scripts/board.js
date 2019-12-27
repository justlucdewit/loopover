function Board(x, y){
    this.cells = [];
    this.width = x;
    this.height = y;

    this.width = 0;
    this.height = 0;

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

    this.moveX = (row, count) => {
        
    }

    this.moveY = (col, count) => {

    }
}