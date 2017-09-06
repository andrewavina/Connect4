console.log("JS Loaded")

//global variables
var player1 = {
    "tokenColor" : "blue",
    "dataName" : "Player 1",
    "wins" : 0
}

var player1Moves = []

var player2 = {
    "mark_color" : "red",
    "data_name" : "Player 2",
    "wins" : 0
}

var player2Moves = []

var numOfPlayers = 2

var winner = false

var moves = 0 // to check if there is a draw at the end of the game

var $pickColor = $("#pick-color")

var $row = $(".row")

var $circles = $(".circle")

var $buttonsRow = $(".buttons-row")

// Diagonal wins Array - All possible combos of diagonal wins
var diagonalWin = [
    [0, 8, 16, 24],
    [1, 9, 17, 25],
    [2, 10, 18, 26],
    [3, 9, 15, 21],
    [3, 11, 19, 27],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [7, 15, 23, 31],
    [8, 16, 24, 32],
    [9, 17, 25, 33],
    [10, 16, 22, 28],
    [10, 18, 26, 34],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [14, 22, 30, 38],
    [15, 23, 31, 39],
    [16, 24, 32, 40],
    [17, 23, 29, 35],
    [17, 25, 33, 41],
    [18, 24, 30, 36],
    [19, 25, 31, 37],
    [20, 26, 32, 38]
];

//MAIN GAME FUNCTION 
$(document).ready(function(){
    makeBoard()
    function makeBoard(){ // create board function
        for (var i = 0; i < 6; i++){ //makes 6 rows and assign each a row number
            for (var j = 0; j < 7; j++){ //makes 7 columns and assign each a column number
            var $circle = $("div class = 'circle' data-name = 'nothing'></div>") // Adding each circle as a sub <div> to the main "#row" <div> on page. Found idea to assign each circle with with the data-name "nothing". The data-name will change when that particular circle is chosen.
            $circle.addClass("col-" +j) //adding specific column to each circle as a class
            $circle.addClass("row-" + i) //adding specific row to each circle as a class
            $row.append($circle) // adds circle to page
            $row.css("background-color", "yellow") //gives the bracket game board color yellow
            }
        }
        //Use data-value to give all circles a specific number between 0-41 (i.e. 42 total circles in play)
        var $circles = $(".circle")
        for (var i = 0; i < $circles.length; i+=1){
            $circles.eq(i).attr("data-value",i) // Attach attribute "data-value" as class for all circles
        }
        //call switch player function here
    } 
    //this function checks to see if the most bottom spot and up in each column is taken or not. If not, it drops the current player's token to the next available spot in the column if any. This function is only invoked after a click.
    function checkSpot(columnNumber, newClassname, token){
        //columnNumber is the column number of the spot the user clicked.
        //newClassname is the class that the spot should take to add the token (circle.background-color) to.
        //token is player 1 or player 2's chosen circle
            for (var i = 0; i < 7; i+=1){
                if (columnNumber === "col-" + i){
                    var column = document.getElementsByClassName("col-" + i) //local var with all of the classes with "col-" + i
                    var columnArray = jQuery.makeArray(column); //make local array with the above elements
                    //check from the last spot of the column array and if the most bottom is not taken, populate that spot.
                    for (var j = columnArray.length - 1; j > -1; j--){
                        if (columnArray[j].getAttribute("data-name") === "nothing"){
                            makeMove(columnArray[j], newClassname, token)
                            break
                        }
                    } 
                }
            }
    }
})



