/*
Ryan Winton
SDI Secion 01
Instructor Lee Lewis
Functions Assignment
*/
console.log("JS is working");

var lottoType = confirm("Are you looking for Florida Lottery or Powerball numbers?/nPress OK for Florida Lottery numbers./nPress Cancel for Powerball numbers."); //Figuring out which lottery they're looking for.


function pickNumbers(drawMax, drawMin) {

    var drawnNumber = Math.ceil(Math.random() * drawMax - drawMin) + drawMin;
    console.log(drawnNumber);
}

if(lottoType === true){
    pickNumbers(53, 1);
}
else {
    pickNumbers(59, 1);
}

