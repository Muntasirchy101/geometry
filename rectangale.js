
function calculateRectangleArea() {
    const rectangleWidth = document.getElementById('rectangle-width')
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue)
    console.log(width)



    const rectangleHeight = document.getElementById('rectangle-height')
    const rectangleHeightValue = rectangleHeight.value;
    const height = parseFloat(rectangleHeightValue)
    console.log(height)

    const area = width * height;
    
    console.log(`The area of the rectangle is ${area} square units`)


    const resultDisplay = document.getElementById('rectangle-area')
    resultDisplay.innerText = area;
}