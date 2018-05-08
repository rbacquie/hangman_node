var Letter = require('./letter.js')


function Word(words) {
    this.word = words;
    this.letters = [];
    this.wordFound = false;


}
module.exports = Word;