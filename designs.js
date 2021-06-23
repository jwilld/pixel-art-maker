
// get color picker from DOM
const colorPicker = document.getElementById("colorPicker");

// get current current color from the color picker
currentColor = colorPicker.value

//change current color when a new color is picked
colorPicker.addEventListener('change', (e) => {
    currentColor = colorPicker.value
});
// get table from the DOM
const canvas = document.getElementById("pixelCanvas");

function makeGrid(rows, columns) {
  const canvasFragment = document.createDocumentFragment();

  // nested loop to create grid
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    for (let i = 0; i < columns; i++) {
      let column = document.createElement("td");
      column.className= "canvas-block"
      // add individual event listeners for columns
      // once clicked, change the color to the currentColor value
      column.addEventListener("click",() => {
          column.style.backgroundColor = currentColor;
      })
      // add columns to row
      row.appendChild(column);
    }
    //append rows and columns to canvas fragment
    canvasFragment.appendChild(row);
  }

  // append canvas fragment to canvas
  canvas.appendChild(canvasFragment);
}

// remove previous canvas
function resetCanvas(){
    while(canvas.hasChildNodes()){
        canvas.removeChild(canvas.lastChild)
    }
}

// get size picker form from the DOM
const sizePicker = document.getElementById("sizePicker");

sizePicker.addEventListener('submit',(e)=> {
    e.preventDefault()
    // get height and width from the sizePicker form fields
    const height = document.getElementById('inputHeight').value
    const width = document.getElementById('inputWidth').value
    // reset grid
    resetCanvas();
    makeGrid(height,width);
})
