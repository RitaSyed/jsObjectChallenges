// Challenge #1_______________________________________________________________
// Wheel of Fortune
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

// Challenge #2__________________________________________________________________
// Find how many times did a team from a given country win the Champions League?
// Given an array called winnerList and the name of a country, display the number of times a team from a given country has won. Return 0 if there have been no wins.

// For example

var winnerList = [
  {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
  {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
  {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
  {season: '2002-2003', team: 'Milan', country: 'Italy'},
  {season: '2003-2004', team: 'Porto', country: 'Portugal'},
  {season: '2004-2005', team: 'Liverpool', country: 'England'},
  {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
  {season: '2006-2007', team: 'Milan', country: 'Italy'},
  {season: '2007-2008', team: 'Manchester United', country: 'England'},
  {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
  {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
  {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
  {season: '2011-2012', team: 'Chelsea', country: 'England'},
  {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
  {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
  {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
  {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
  {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
];
var countrySpain = "Spain";  // should return 8
var country = "Portugal";  // should return 1
var country = "Russia";  // should return 0
var count=0;
var challengeAnswer2 = document.getElementById("challenge-2");

for(var i=0; i<winnerList.length; i++){
    if(winnerList[i].country==countrySpain){
      count+=1;
    }
}
challengeAnswer2.innerHTML += "<h5>" + count + "</h5>";