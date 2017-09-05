console.log("Loaded")

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
var num_of_players = 0;
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

// game function
$(document).ready(function() {
    function two_players(){
        $("#submit").click(function(){
            console.log($("input.#player-1").val())//mine test
            console.log($("input.#player-2").val())//mine test 
            $question.remove();
            $("input").css("display", "none")
            $("submit").remove()
            $pick_color.html(
                "Hello, " + $("#player-1").val() + " and " + $("#player-2").val() + "! " + "</br></br>" +
                $("#player-1").val() + " is <span style='color: #4189C7;'>Blue</span>, and " + $("#player-2").val() + " is <span style='color: #C73D47;'>Red</span>.</br>" +
                $("#player-1").val() + ", go first!"
                )
                $pick_color.css("display", "block");
                $pick_color.css("margin", "25px 0");

                num_of_players = 2;

                make_board ();
        })
    }
});

