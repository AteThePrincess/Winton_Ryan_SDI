/*
Ryan Winton
SDI Secion 01
Instructor Lee Lewis
Functions Assignment
*/
var lottoType = confirm("Are you looking for Florida Lottery or Powerball numbers?\nPress OK for Florida Lottery numbers.\nPress Cancel for Powerball numbers."); //Figuring out which lottery they're looking for.
var ballVar = 0; // Sets up our while statement for later

function pickNumbers(drawMax, drawMin) { //Creates our function called pickNumbers using the arguments drawMax and drawMin

    var drawnNumber = Math.ceil(Math.random() * drawMax - drawMin) + drawMin; // Picks a random number between our max and min
    return drawnNumber; // brings that number outside of the function to a usable space in the code
}

if(lottoType === true) { // If user prompt tells us we need FL Lottery numbers, this code block runs.
    var lotteryArray = new Array; //Creates an array to store out lottery numbers in.
    while(ballVar < 6) { // Tells our code to draw 6 numbers.
        var randomNumber = pickNumbers(53, 1); //Pulls drawnNumber from our function and stores it in randomNumber
        if(randomNumber === lotteryArray[0,1,2,3,4,5]) { // IF the number that's drawn matches another number in the lottery array then this code block loops again to make sure we don't have doubles.
        }
        else // If the number is not a match, this runs.
        {
            lotteryArray.push(randomNumber); // Puts randomNumber into our array, and increments the array by 1.
            ballVar++; // Increments ballVar by 1 to make sure we only draw 6 numbers.
        }
    }
    console.log("Your winning numbers are " + lotteryArray[0] + ", " + lotteryArray[1] + ", " + lotteryArray[2] + ", " + lotteryArray[3] + ", " + lotteryArray[4] + ", " + lotteryArray[5] + "."); // Prints the winning FL Lottery numbers to console.
}
else { // If user prompt tells us we need Powerball numbers, this code block runs.
    var lotteryArray = new Array; //Creates an array to store out lottery numbers in.
    while(ballVar < 5) { // Tells our code to draw 5 numbers.
        var randomNumber = pickNumbers(59, 1); //Pulls drawnNumber from our function and stores it in randomNumber
        if(randomNumber === lotteryArray[0,1,2,3,4]) {// IF the number that's drawn matches another number in the lottery array then this code block loops again to make sure we don't have doubles.
        }
        else // If the number is not a match, this runs.
            {
            lotteryArray.push(randomNumber); // Puts randomNumber into our array, and increments the array by 1.
            ballVar++;// Increments ballVar by 1 to make sure we only draw 5 numbers.
        }
    }
    var PB = pickNumbers(35, 1); // Draws the Powerball number
    console.log("Your winning numbers are " + lotteryArray[0] + ", " + lotteryArray[1] + ", " + lotteryArray[2] + ", " + lotteryArray[3] + ", " + lotteryArray[4] + ", and your PowerBall number is: " + PB + "."); // Prints to console the winning Powerball Numbers.
}