let gridSize = 16;

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
            p.style.background = 'black';
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

