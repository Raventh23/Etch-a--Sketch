let body = document.querySelector('body');

let etchBoard = document.createElement('div'); //create the etch-a-sketch board
etchBoard.setAttribute('id', 'etchBoard');
body.appendChild(etchBoard);

let userButton = document.createElement('btn');
userButton.setAttribute('id', 'userButton');
userButton.addEventListener('click', ()=>
    userTable());
body.appendChild(userButton);

function userTable() { //removes the table in place and replaces it with a table of the user selected size
    let remove = document.querySelectorAll('.row');
    remove.forEach((row) => {
        row.remove();
    })
    let size = 0
    while(size < 1 || size > 99){
        size = prompt('pick a number from 1-99')
    }
    createTable(size)
    let cells = document.querySelectorAll('.cell'); //adds an event listner to each cell that turns blue when moused over
    cells.forEach((cell) => {
        cell.addEventListener("mouseover",() => {
            cell.style.backgroundColor = 'blue';
        });
    });    
}

let size = 16 
function createTable(size) { //creates the table at whatever size is set by the user or 16 on start
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        etchBoard.appendChild(row);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
        }
    }}
createTable(size)

let cells = document.querySelectorAll('.cell'); //adds an event listner to each cell that turns blue when moused over
cells.forEach((cell) => {
    cell.addEventListener("mouseover",() => {
        cell.style.backgroundColor = 'blue';
    });
});
