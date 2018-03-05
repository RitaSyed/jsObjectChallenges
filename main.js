// Challenge #1: Wheel of Fortune
// Three candidates take part in a TV show. In order to decide who will take part in the final game and probably become rich, they have to roll the Wheel of Fortune!The Wheel of Fortune is divided into 20 sections, each with a number from 5 to 100 (only mulitples of 5). Each candidate can roll the wheel once or twice and sum up the score of each roll. The winner one that is closest to 100 (while still being lower or equal to 100). In case of a tie, the candidate that rolled the wheel first wins.

// You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values. Display the name of the winner or false if there is no winner (all scored more than 100).

// Examples:

var players = [{ name: "Bob", scores: [10, 65] }, { name: "Bill", scores: [90, 5] }, { name: "Charlie", scores: [40, 55] }]; // Displays "Bill"
// var players = [{ name: "Bob", scores: [15, 20] }, { name: "Bill", scores: [10, 15] }, { name: "Charlie", scores: [90, 10] }]; // Displays "Charlie"

var maxTotal =0;
var winner;
var challengeAnswer = document.getElementById("challenge-1");
for(var i=0; i<players.length; i++){
  players[i].total=0;
  for(var j=0; j<players[i].scores.length; j++){
    players[i].total+=players[i].scores[j];
  }
    if (players[i].total <= 100 && maxTotal < players[i].total){
    maxTotal = players[i].total;
    winner=players[i].name;
  }
}
challengeAnswer.innerHTML += "<h5>" + winner + "</h5>";