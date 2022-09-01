let gridSize = 20;
const grid = document.querySelector('.grid-container');

function createRowDiv () {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add(`row-container-${i+1}`);
    rowDiv.style.cssText = 'display: flex; flex: 0 1 100%;';

    grid.appendChild(rowDiv);
}

function createButton () {
    const row = document.querySelector(`.row-container-${i+1}`);

    const singleDiv = document.createElement('button');
    singleDiv.classList.add('single-div');
    singleDiv.style.cssText = 'flex: 0 1 100%; border: 1px solid blue';

    row.appendChild(singleDiv);
}

function createRowButtons () {
    for (j = 0; j < gridSize; j++) {
        createButton ();
    }
}

for (i = 0; i < gridSize; i++) {
    createRowDiv();
    createRowButtons();
}

const hover = document.querySelectorAll('button');

button.addEventListener('mouseover', () => {
    hover.style.cssText = 'background: lightred;';
});