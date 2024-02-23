function triangleCalculateArea(){
    const triangelBaseInput = document.getElementById('triangle-base')
    const triangleBaseText = triangelBaseInput.value;
    const Base = parseFloat(triangleBaseText);
    console.log(Base)


    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeightInput.value;
    const Height = parseFloat(triangleHeightText)
    console.log(Height)

    const area = .5 * Base * Height;
    console.log(`Area of the triangle is ${area}`)

    const triangleArea = document.getElementById('triangle-area')
    triangleArea.innerText = area
}