// Select color input
// Select size input
//storing variables: sizePicker,table,width and height to access
const pixelCanvas = document.getElementById('pixelCanvas');
const Fill_Form = document.getElementById('sizePicker');
// add and event when the user press th sumbit it will record it and mark it down 
Fill_Form.addEventListener('submit', function(event) {// sing a submit event listener 
    event.preventDefault(); // preventing the page from reloading.
    const inputHeight = document.getElementById('inputHeight').value;// It will mark down and create height of the pixelCanvas from the user's input value
    const inputWidth = document.getElementById('inputWidth').value;// It will mark down and create width of the pixelCanvas from the user's input value
    pixelCanvas.innerHTML = "";// this function gets link to the html file
    makeGrid(inputHeight, inputWidth);// calling the make function later
})

function makeGrid(height, width) {// functions to create to the pixelCanvas 
    let isPainting = false;//create a new function outside the for loop meaning 
    const colorPicker = document.getElementById('colorPicker');
    for (let y = 0; y < height; y = y + 1) {// define a new variable y coordinate denote as the height of the pixelCanvas, telling when the loop to stop and telling how much should add for the y value
        let row = document.createElement('tr');// define a new variable tr will add new row by one and it stop adding until it is equal to the user input in height
        for (let x = 0; x < width; x = x + 1) { //define a new variable x coordinate denote as the width of the pixelCanvas, telling when the loop to stop and telling how much should add for the x value
            let cell = document.createElement('td');// define a new variable cell it  will add new column by one and it stop adding until it is equal to the user input in width
            row.append(cell);// adding up rows in the pixelCanvas 

            cell.addEventListener('click', function() { // add an event for clicking the cell for filling up the color in the cell 
                let color = colorPicker.value; // define the a new varaible color
                this.style.backgroundColor = color; // use this.style refer to this particular event and it should fill up the color of the cell in accordance of user input for color
            });

            cell.addEventListener('dblclick', function paint() {// add an event for double-click the cell to remove drawing in a particular cell
                let erase_color = 'white'; // define a new variable erase_color and set the color of white same as the default color same as the CSS color
                this.style.backgroundColor = erase_color; //use this.style refer to this particular event and it should fll the cell in white color 
            });

            cell.addEventListener('mousedown', function(event) { // add an event work with the function mousemove recongize when the user stop painting and stop filling the cell color 
                isPainting = true; // the user is still painting 
            });

            cell.addEventListener('mousemove', function paint() { //add an event for mousemove
                if (isPainting) { //set the condition if the user is painting
                    const highlight = colorPicker.value; // define a new variable equal to the user's input for coloring the cell
                    this.style.backgroundColor = highlight; // using this style to refer this particular event for dragging the mouse to highlight the color of the cell
                }
            });

            cell.addEventListener('mouseup', function paint() { // add event listner when it is not clicking the mouse it will stop filling up the color of the cell
                isPainting = false; // it means that the user is not painting the cell
            });
        }
        pixelCanvas.append(row); // it add the the coloumn for each row which has appeneded
    }
    pixelCanvas.addEventListener('mouseleave', function() { // add an event when the mouse leave away from the pixelCanvas
        isPainting = false; // it means the user is not painting the cell 
    });
}