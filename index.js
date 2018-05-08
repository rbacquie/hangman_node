var inquirer = require('inquirer');
var Word = require('./word.js');



var wordBank = [];
var guesses = 10;
var wins = 0;
var losses = 0;
var guessedLetters = [];
var display = 0;
var currentWord = '';

var newWord = [
    {
    wordList:['BILLS', 'PANTHERS', 'TEXANS', 'COLTS', 'JAGUARS', 'NY JETS', 'PATRIOTS', 'NY GIANTS']
    }
];


startGame();

function startGame() {

    console.log('Welcome to NFL Hangman!');

inquirer.prompt [{

}].then
}