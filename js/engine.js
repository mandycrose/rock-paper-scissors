/*listen for the button clicks*/
$("#rock").click(function(event){
var move_you = "rock";
$("#play_you").text (move_you);
console.log("you: " + move_you);
});

$("#paper").click(function(event){
var move_you = "paper";
$("#play_you").text (move_you);
console.log("you: " + move_you);
});

$("#Scissors").click(function(event){
var move_you = "Scissors";
$("#play_you").text (move_you);
console.log("you: " + move_you);
});
