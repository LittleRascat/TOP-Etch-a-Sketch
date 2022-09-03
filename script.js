let gridSize = 16;
let color = 'black';

const grid = document.querySelector('.grid-container');

function createRowDiv () {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add(`row-container-${i+1}`);
    rowDiv.style.cssText = 'display: flex; flex: 0 1 100%;';

    grid.appendChild(rowDiv);
}

function createCell () {
    const row = document.querySelector(`.row-container-${i+1}`);

    const cell = document.createElement('p');
    cell.classList.add('cell');
    cell.style.cssText = 'flex: 0 1 100%;';

    row.appendChild(cell);
}

function createRowCells () {
    for (j = 0; j < gridSize; j++) {
        createCell ();
    }
}

function createGrid () {
    for (i = 0; i < gridSize; i++) {
        createRowDiv();
        createRowCells();
    }
    mouseoverFunction();
}

function removeAllChildren (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function mouseoverFunction () {
    const gridCells = document.querySelectorAll('p');
    gridCells.forEach((p) => {
        p.addEventListener('mouseover', () => {
            p.style.background = ''+color+'';
        });
    });
}

createGrid ();

const resize = document.querySelector('.resize');
resize.onclick = () => {
    removeAllChildren(grid);
    gridSize = prompt('Enter a number!');
    if (gridSize > 100) {
        gridSize = 100;
    }
    createGrid ();
}

const clear = document.querySelector('.clear');
clear.onclick = () => {
    removeAllChildren(grid);
    createGrid ();
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

const choose = document.querySelector('.choose');

choose.onclick = () => {
    const gridCells = document.querySelectorAll('p');
    color = prompt('Enter a color!');
}

const rainbow = document.querySelector('.rainbow');

rainbow.onclick = () => {
    const gridCells = document.querySelectorAll('p');
    gridCells.forEach((p) => {
        p.addEventListener('mouseover', () => {
            let r = randomInteger(255);
            let g = randomInteger(255);
            let b = randomInteger(255);
            color = r+","+g+","+b;
            p.style.background = 'rgb('+color+')';
        });
    });
}

