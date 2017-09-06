console.log("JS loaded")

// global variables
var player1 = {
        "tokenColor" : "blue",
        "dataName" : "Player 1",
        "wins" : 0
    }
    
var player1Moves = []   
    
var player2 = {    
        "tokenColor" : "red",
        "dataName" : "Player 2",
        "wins" : 0
    }
    
var player2Moves = []
    
var numOfPlayers = 2
    
var winner = false
    
var moves = 0 // to check if there is a draw 
  
var $pickColor = $("#pick-color")

var $row = $(".row")

var $circles = $(".circle")

var $buttonsRow = $(".buttons-row")

//MAIN GAME FUNCTION - all other functions are nested inside 
$(document).ready(function(){
    makeBoard()
    function makeBoard(){ //create board function
        for (var i = 0; i < 6; i+=1){ //makes 6 rows and assign each a row number
            for (var j = 0; j < 7; j+=1){ //makes 7 columns and assign each a column number
                var $circle = $("<div class = 'circle' data-name = 'nothing'></div>") // Adding each circle as a sub <div> to the main "#row" <div> on page. Found idea to assign each circle with with the data-name "nothing". The data-name will change when that particular circle is chosen. 
                $circle.addClass("col-" + j) //adding specific column to each circle as a class
                $circle.addClass("row-" + i) //adding specific row to each circle as a class
                $row.append($circle) // adds circle to page
                $row.css("background-color", "yellow") //gives the bracket game board color yellow
            }
        }
        //Use data-value to give all circles a specific number between 0-41 (i.e. 42 total circles in play)
        var $circles = $(".circle")
        for (var i = 0; i < $circles.length; i+=1){
            $circles.eq(i).attr("data-value", i) //Attach attribute "data-value" as class for all circles
        }
            switchPlayer()
    }
    
    //this function checks to see if the most bottom spot and up in each column is taken or not. If not, it drops the current player's token to the next available spot in the column if any. This function is only invoked after a click.
    function checkSpot(columnNumber, newClassname, token){
        //columnNumber is the column number of the spot the user clicked
        //newClassname is the class that the spot should take to add the token (circle.background-color) to.
        //token is player 1 or player 2's chosen circle
        for (var i = 0; i < 7; i+=1){ 
            if (columnNumber === "col-" + i){
                var column = document.getElementsByClassName("col-" + i) // local var with all of the classes with "col-" + i
                var columnArray = jQuery.makeArray (column) //make local array with the above elements
                // check from the last spot of the column array and if the most bottom is not taken, populate that spot.
                for (var j = columnArray.length - 1; j > -1; j--){
                    if (columnArray[j].getAttribute("data-name") === "nothing"){
                        makeMove(columnArray[j], newClassname, token)
                        break
                    }
                }
            }
        }
    }

    //function that adds player's token to game board
    function makeMove (position, newClassname, token) {
        //position is the most bottom and non-occupied spot of the particular column the player chose.
        //newClassName is the class that the spot should take to add background color.
        //token is which player (player 1 or 2)
        if (token === player1.dataName){ //check whose token just got played
            player1Moves.push(parseInt($(position).attr("data-value")))
            $(position).addClass(newClassname)
            $(position).attr("data-name", token) //if player 1 chose, give circle data-name "Player 1"
        } else if (token === player2.dataName){
            player2Moves.push(parseInt($(position).attr("data-value")))
            $(position).addClass(newClassname)
            $(position).attr("data-name", token) // if player 2 chose, give circle data-name "Player 2"
            }
        }
    //switch players function
    function switchPlayer(){ 
        var $allCircles = $(".circle")
        var playerClick = 1 //makes Player 1 be first player up
        //nested function below only allows circles with data-name "nothing" able to be chosen by players
        $.each($allCircles, function (index, value){
            $allCircles.eq(index).click(function(){
                if ($(this).attr("data-name") === "nothing"){
                    // check if spot available for the player 1
                    if (playerClick === 1){
                        checkSpot($(this).attr("class").split(" ")[1], "circle-background-color-" + player1.tokenColor, player1.dataName)
                        playerClick = 2
                        // later, if moves === 42, it will mean that there is a draw.
                        moves +=1
                        // check for win after every turn.
                        checkWinner ($(this).attr("class").split(" ")[1], player1.dataName)
                    } 
                        else { // check if spot available for the player 2
                            checkSpot($(this).attr("class").split(" ")[1], "circle-background-color-" + player2.tokenColor, player2.dataName)
                            playerClick = 1
                            // later, if moves === 42, it will mean that there is a draw.
                            moves +=1
                            // check for win after every turn.
                            checkWinner($(this).attr("class").split(" ")[1], player2.dataName)
                        }
                    }
                })
            })
        }
    //below are all functions that check for win and end the game
    // call this function after each turn 
    function checkWinner (columnNumber, winningToken){
        // columnNumber is the number of the column that a token has been made,
        // winningToken is who made the token.
        //3 calls below check for wins horizontally, vertically, and diagonally
        checkColumn(columnNumber, winningToken)
        checkRow(winningToken)
        check_diagonal (winningToken)
        if (moves === 42){ // check if there is a draw.
            $pickColor.fadeOut()
            $row.fadeOut()
            setTimeout(function(){
                $buttonsRow.append("<h1 style='font-size: 72px; margin: 0 auto'>It's a Draw!</h1>")
                // invoke the play again function when there is a draw.
                playAgain()
            })
        }
    }
    
    // for columns, only check for a win in the column that the players chose.
    function checkColumn (columnNumber, winningToken){
        for (var i = 0; i < 7; i+=1){
            if (columnNumber === "col-" + i){
                // local var with all of the classes with "col-" + i
                var column = document.getElementsByClassName("col-" + i)
                // make an array with the above elements (also local).
                var columnArray = jQuery.makeArray (column)
                // check the column from the bottom up.
                for (var j = columnArray.length - 1; j > 1; j--){
                    console.log(j)
                    if (columnArray[j].getAttribute("data-name") === winningToken &&
                        columnArray[j-1].getAttribute("data-name") === winningToken &&
                        columnArray[j-2].getAttribute("data-name") === winningToken &&
                        columnArray[j-3].getAttribute("data-name") === winningToken){
                        setTimeout(function(){
                            // announce winner if there are 4 consecutively same tokens.
                            announceWinner(winningToken)
                        })
                        break
                    }
                }
            }
        }
    }
    
    // for rows also, only check for a win in the row that the players chose.
    function checkRow(winningToken){
        if (winningToken === player1.dataName){
            // sort the array of the player's moves (numbers) in ascending order.
            player1Moves.sort()
            for (var i = 0; i < player1Moves.length - 2; i+=1){
            // make the limit of i to the array's length - 2 so that there are no undefined objects that the computer tries to compare.
                var firstMatch = player1Moves[i]
                var secondMatch = player1Moves[i+1]
                var thirdMatch = player1Moves[i+2]
                var fourthMatch = player1Moves[i+3]
                if (
                    secondMatch === (firstMatch + 1) &&
                    thirdMatch === (secondMatch + 1) &&
                    fourthMatch === (thirdMatch + 1) ) {
                    setTimeout(function () {
                        announceWinner (winningToken)
                    })
                }
            }
        } else if (winningToken === player2.dataName){
            //Sort the array of the player's moves (numbers) in ascending order.
            player2Moves.sort()
            for (var i = 0; i < player2Moves.length - 2; i+=1){
            //Make the limit of i to the array's length - 2 so that there are no undefined objects that the computer tries to compare.
                var firstMatch = player2Moves[i]
                var secondMatch = player2Moves[i+1]
                var thirdMatch = player2Moves[i+2]
                var fourthMatch = player2Moves[i+3]
                if (
                    secondMatch === (firstMatch + 1) &&
                    thirdMatch === (secondMatch + 1) &&
                    fourthMatch === (thirdMatch + 1)){
                    setTimeout(function(){
                        announceWinner(winningToken)
                    })
                }
            }
        }
    }
    
    //For diagonals, go through all possible wins instead of just checking for the spot that the players chose.
    function check_diagonal (winningToken){
        //An array of all possible diagonal combo wins
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
        ]
        for (var i = 0; i < diagonalWin.length; i+=1) {
            //Data-value is assigned to each circle (div) and goes from 0 to 41.
            var $check_1 = $("div[data-value='" + diagonalWin[i][0] + "']")
            var $check2 = $("div[data-value='" + diagonalWin[i][1] + "']")
            var $check_3 = $("div[data-value='" + diagonalWin[i][2] + "']")
            var $check_4 = $("div[data-value='" + diagonalWin[i][3] + "']")
            if (
                $check_1.attr("data-name") === winningToken &&
                $check2.attr("data-name") === winningToken &&
                $check_3.attr("data-name") === winningToken &&
                $check_4.attr("data-name") === winningToken
                ) {
                setTimeout(function(){
                    announceWinner (winningToken)
                })
            }
        }
    }
    //Announce winner
    function announceWinner(winningToken){
        if (winningToken === player1.dataName){
            winningToken = ("Player 1")
            $pickColor.fadeOut()
            $row.fadeOut()
            setTimeout(function(){
                $('#subhead').remove()
                $buttonsRow.append("<h1 style='font-size: 6em; margin: 13vh 0 25px 0'>"+ winningToken + " wins!</h1>").fadeIn()
                playAgain()
            })
            winner = true //This stops the game.
            player1.wins+=1
        } else if (winningToken === player2.dataName){
            winningToken = ("Player 2")
            $pickColor.fadeOut()
            $row.fadeOut()
            setTimeout(function(){
                $('#subhead').remove() 
                $buttonsRow.append("<h1 style='font-size: 6em; margin: 13vh 0 25px 0'>"+ winningToken + " wins!</h1>")
                 playAgain()
             })
            winner = true //This stops the game.
            player2.wins+=1
        } 
    }
    
    //Play again button
    function playAgain (){
        setTimeout(function(){
            $('#subhead').remove()
            $buttonsRow.append("<button id = 'play-again'>Play Again?</button>")
            $("#play-again").click(function(){ //On click, reload the window
            console.log("clicked")
            location.reload()
        })
        })
    }})