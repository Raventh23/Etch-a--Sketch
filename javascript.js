let body = document.querySelector('body');

let etchBoard = document.createElement('div'); //create the etch-a-sketch board
etchBoard.setAttribute('id', 'etchBoard');
body.appendChild(etchBoard);

for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    etchBoard.appendChild(row);
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        row.appendChild(cell);
    }
}
let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener("hover", () =>{
    });
});