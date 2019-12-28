const cols = 5;
const rows = 5;

const board = new Board(cols, rows);
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const width = 600;
const height = 600;
const tilesize = width/cols|0;

//set canvas settings
ctx.textBaseline = "middle";
ctx.textAlign = "center";

//set canvas size
canvas.width = width;
canvas.height = height;

function renderBoard(){
    ctx.clearRect(0, 0, width, height);
    for (let x = 0; x < board.width; x++){
        for (let y = 0; y < board.height; y++){
            const index = board.cells[x][y];
            const cx = (index%board.width+0.1)/(board.width-0.6);
            const cy = (((index/board.width)|0)+0.2)/(board.height-0.6);
            let color = [(1-cx)*235+15, cy*210+cx*(1-cy)*50+15, cx*220];
            color = `rgb(${color.map(x=>x|0).join()})`;
            ctx.fillStyle = color;
            ctx.fillRect(x*tilesize | 0, y*tilesize | 0, tilesize, tilesize);
        }
    }
}

renderBoard();