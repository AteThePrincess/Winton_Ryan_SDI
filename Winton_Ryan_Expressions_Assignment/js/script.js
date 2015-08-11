/*
Ryan Winton
SDI Secion 01
Instructor Lee Lewis
Expressions Assignment
*/
alert("JavaScript works!");

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


var elecResistivity = elecResistance * csArea / wireLength;

alert("The electrical resistivity of your wire is " + elecResistivity " ohm metres");
