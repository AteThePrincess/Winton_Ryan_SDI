/*
Ryan Winton
SDI Secion 01
Instructor Lee Lewis
Functions Assignment
*/
console.log("JS is working");

var lottoType = confirm("Are you looking for Florida Lottery or Powerball numbers?/nPress OK for Florida Lottery numbers./nPress Cancel for Powerball numbers."); //Figuring out which lottery they're looking for.

if(lottoType === true){
    var drawMax = 53;
    var drawMin = 1;
}
else {
    var drawMax = 59;
    var drawMin = 1;
}

pickNumbers(drawMax, drawMin);

function pickNumbers() {

    var drawnNumber = Math.ceil(Math.random() * drawMax - drawMin) + drawMin;
    console.log(drawnNumber);
}
