
/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radio)
{
    return PI * (radio * radio);
}

function squareArea(size)
{
    return size * 4;
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;

