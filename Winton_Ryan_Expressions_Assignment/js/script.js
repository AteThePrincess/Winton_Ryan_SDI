/*
Ryan Winton
SDI Secion 01
Instructor Lee Lewis
Expressions Assignment
*/

// Create Wire Length variable
var wireLength;
// Create Electrical Resistance variable
var elecResistance;
// Create Cross-sectional Area variable
var csArea;
// Create eleResistivity variable
var elecResistivity;

// Request Wire Length and store it in variable wireLength
var wireLength = prompt("What is the length of the wire?");
// Request Electrical Resistance and store it in variable elecResistance
var elecResistance = prompt("What is the Electrical Resistance of your wire?");
// Request Cross-sectional Area and store it in variable csArea
var csArea = prompt("What is the Cross-sectional Area of the wire?");

//Creating an array and defining indexes
var myArray = new Array();
myArray[0] = wireLength;
myArray[1] = elecResistance;
myArray[2] = csArea;


//Calculating Electric Resistivity using our Array indexes
var elecResistivity = myArray[1] * myArray[2] / myArray[0];

//Outputting the answer to the user.
alert("The electrical resistivity of your wire is " + elecResistivity + " ohm metres");
