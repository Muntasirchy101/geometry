function calculatePentagonArea() {
    const perimeter = getInputValueById('perimeter')
    const apothem = getInputValueById('apothem')
    console.log(perimeter,apothem)
    const area = 0.5 * perimeter * apothem
    console.log(area)

    setInnerTextById('display-pentagon',area)
}


function getInputValueById(getElementById) {
    const inputValue = document.getElementById(getElementById)
    const inputValueText = inputValue.value
    const value = parseFloat(inputValueText);
    return value
    
}

function setInnerTextById (getElementById,area) {
    const element = document.getElementById(getElementById)
    element.innerText = area;
}