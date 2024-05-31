let player = 1;

function createRow(){
    const row = document.createElement("div");
    row.className = "row";
    return row;
}

function createColumn() {
    const col = document.createElement("div");
    col.className = "col";
    return col;
}


function createTicTacBoxes() {
    const container = document.createElement("div");
    container.className = "container";

    for(let i = 0; i <WIDTH; i++) {
        const row = createRow();
        container.appendChild(row);
        for(let col = 0; col < WIDTH; col++) {
            const columnElement = createColumn();
            columnElement.addEventListener('click', () => onClick(i, col, columnElement));
            row.appendChild(columnElement);
        }
    }

    ROOT.appendChild(container);
}

function onClick (row, col, columnElement) {
    const text = player === 1 ? 'X' : 'O';
    columnElement.textContent = text;
    SCORE_BOARD[row][col] = text;
    columnElement.setAttribute('disabled', true);
    columnElement.classList.add('disable')
    console.log(SCORE_BOARD, row, col);
}