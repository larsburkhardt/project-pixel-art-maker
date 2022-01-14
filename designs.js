// Select color input
// Select size input

const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const colorPicker = document.querySelector('#colorPicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

sizePicker.addEventListener('submit', makeGrid);


// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
    e.preventDefault();

    // Remove Grid if present
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
    // create the grid
    for (let i = 1; i <= inputHeight.value; i++) {
        const row = document.createElement('tr');
        pixelCanvas.appendChild(row);

        for (let j = 1; j <= inputWidth.value; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
    }

    const tableCell = document.querySelectorAll('td');
    // console.log(tableCell);

    // Colorizing the cells    
    tableCell.forEach(function (cell) { 
        cell.addEventListener('click', function (e) {
            //  console.log(e.target.style.backgroundColor);
            if (e.target.style.backgroundColor === "") {
                e.target.style.backgroundColor = colorPicker.value;
            } else {
                e.target.style.backgroundColor = "";
            }
        });
    });
}

