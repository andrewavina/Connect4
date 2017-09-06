console.log("JS Loaded")

//global variables
var player_1 = {
    "mark_color" : "blue",
    "data_name" : "Player 1",
    "wins" : 0
}

var player_1_moves = []

var player_2 = {
    "mark_color" : "red",
    "data_name" : "Player 2",
    "wins" : 0
}

var player_2_moves = []

var num_of_players = 2

var winner = false

var moves = 0 // to check if there is a draw at the end of the game

// All possible combos of diagonal wins
var diagonal_win = [
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


