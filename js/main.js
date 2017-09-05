//global variables
var player_1 = {
    "mark_color" : "blue",
    "data_name" : "Player 1",
    "wins" : 0
};

var player_1_moves = [];

var player_2 = {
    "mark_color" : "red",
    "data_name" : "Player 2",
    "wins" : 0
};

var player_2_moves = [];

var num_of_plyaers = 0;

var winner = false;

var moves = 0;

//DOM manipulation
var $question = $("#question")

var $buttons_row_1_child = $(".buttons-row :first-child")

var $pick_color = $("#pick-color")

var $red_btn = $("#red-btn")

var $blue_btn = $("#blue-btn")

var $row = $(".row")

var $circles = $("circle")

var $buttons_row = $(".buttons-row")
