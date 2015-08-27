/*
Ryan Winton
SDI Secion 01
Instructor Lee Lewis
Functions Assignment
*/
console.log("JS is working");

var lottoType = confirm("Are you looking for Florida Lottery or Powerball numbers?\nPress OK for Florida Lottery numbers.\nPress Cancel for Powerball numbers."); //Figuring out which lottery they're looking for.
var ballVar = 0;

function pickNumbers(drawMax, drawMin) {

    var drawnNumber = Math.ceil(Math.random() * drawMax - drawMin) + drawMin;
    return drawnNumber;
}

if(lottoType === true) {
    var lotteryArray = new Array;
    while(ballVar < 6) {
        var randomNumber = pickNumbers(53, 1);
        lotteryArray.push(randomNumber);
        ballVar++;
    }
    console.log("Your winning numbers are " + lotteryArray[0] + ", " + lotteryArray[1] + ", " + lotteryArray[2] + ", " + lotteryArray[3] + ", " + lotteryArray[4] + ", " + lotteryArray[5] + ".");
}
else {
    var lotteryArray = new Array;
    while(ballVar < 5) {
        var randomNumber = pickNumbers(59, 1);
        lotteryArray.push(randomNumber);
        ballVar++;
    }
    var PB = pickNumbers(35, 1);
    console.log("Your winning numbers are " + lotteryArray[0] + ", " + lotteryArray[1] + ", " + lotteryArray[2] + ", " + lotteryArray[3] + ", " + lotteryArray[4] + ", and your PowerBall number is: " + PB + ".");

}

