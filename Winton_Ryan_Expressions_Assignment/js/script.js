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


// Request Wire Length and store it in variable wireLength
prompt("What is the length of the wire?");
// Request Electrical Resistance and store it in variable elecResistance
prompt("What is the Electrical Resistance of your wire?");
// Request Cross-sectional Area and store it in variable csArea
prompt("What is the Cross-sectional Area of the wire?");


var elecResistivity = (elecResistance * csArea) / wireLength;
command.log("The Electrical Resistivity is " + elecResistivity)