

const input = document.getElementById('number')

input.addEventListener('input', ()=> lengthConverter(input.value))

function lengthConverter(value) {
    document.getElementById("output meter").innerHTML = value + " meters" + " = " + Math.round( value * 3.28 ) + " feet";
    document.getElementById("output feet").innerHTML = value + " feet" + " = " + Math.round( value * 0.304 ) + " meters ";
    document.getElementById("output liter").innerHTML = value + " liters" + " = " + Math.round( value * 0.26 ) + " gallons";
    document.getElementById("output gallon").innerHTML = value + " gallons" + " = " + Math.round( value * 3.78 ) + " liters";
    document.getElementById("output kilogram").innerHTML = value + " kilograms" + " = " + Math.round(value * 2.20 ) + " pounds";
    document.getElementById("output pound").innerHTML = value + " pounds" + " = " + Math.round( value * 0.45 ) + " kilograms";
}

