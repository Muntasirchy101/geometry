
function calculateParaArea() {
    const paraBaseInput = document.getElementById('paraBase')
    const paraBaseValue = paraBaseInput.value;
    const Base = parseFloat(paraBaseValue)
    console.log(Base)


    const paraHeightInput = document.getElementById('paraHeight')
    const paraHeightValue = paraHeightInput.value
    const Height = parseFloat(paraHeightValue)
    console.log(Height)

    const Area = Base * Height;
    console.log(`The area of parallelogram is ${Area}`)

  const resultDisplay = document.getElementById('displaypara')
  resultDisplay.innerText = Area
}