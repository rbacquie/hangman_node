function Letter(letter, check) {

    this.letter = letter;

    this.checkGuess = false;

    // function post to screen
    this.letterCheker = function () {

        // if there is a space between words this will check and display a space
        if (this.letter == ' ') { // renders a blank
            return ' ';
        };

        if (this.checkGuess == false) { // renders _
            return '_';

        } else { // renders the letter
            this.checkGuess == true;
            return this.letter;
        };

    };
};
    module.exports = Letter;