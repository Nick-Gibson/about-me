'use strict';

// Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
// Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
// Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
// Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

var userName = prompt('Arrrrr, hallo thar! Tis talk like a pirate dayyyyyy! What be yer name!?');

alert('Ahoy, ' + userName + ', I can see ye be a landlubber of the wretchedest sort. See if ye can answer me riddles about my life pirating on the high seas!');
console.log('userName value is' + userName);

var answer1 = prompt('Do I pillage according to a code of conduct!?').toUpperCase();
console.log('answer1 value is' + answer1);

if (answer1 === 'N' || answer1 === 'NO'  || answer1 === 'NAY') {
  alert('Haaar! Ye be wise - we pillage as we please!');
} else {
  alert('Ah ha ha ha, nay, you may wish it true to save yer hide, but our morals are as thin as our daily grog!');
}

var answer2 = prompt('Does my ship o\' thee damned have a mascot?').toUpperCase();
console.log('answer2 value is' + answer2);


if (answer2 === 'Y' || answer2 === 'YES' || answer2 === 'YAR') {
  alert('Ho ho! How did ye know about our feline, Sir Royal Brougham, scourge of every rodent from bow to stern!?');
} else {
  alert('Yer dry feet lead you astray; all pirate ships need t\' have the proper compliment of a frightening menagerie!');
}

var answer3 = prompt('Arrr, am I havin\' more rum?').toUpperCase();
console.log('answer3 value is' + answer3);

if (answer3 === 'Y' || answer3 === 'YES' || answer3 === 'YAR') {
  alert('HOW COULD THERE BE ANY OTHER ANSWER, ME MATEY?');
} else {
  alert('Ye truly are a lowly, wretched cur. Turn down the rum!?');
}

var answer4 = prompt('Can this pirate code?').toUpperCase();
console.log('answer4 value is' + answer4);

if (answer4 === 'Y' || answer4 === 'YES' || answer4 === 'YAR') {
  alert('Tis true! Our servers are colocated in Tortuga');
} else {
  alert('Haaar, have ye so little faith? I may make me mark wit\' an X, but I type by touch!');
}

var answer5 = prompt('Arrr, do I treat every day as Talk Like A Pirate Day, whether th\' season be foul or fair?').toUpperCase();
console.log('answer5 value is' + answer5);

if (answer5 === 'N' || answer5 === 'NO' || answer5 === 'NAY') {
  alert('You\'re right! Thank goodness, that would be exhausting for all involved');
} else {
  alert('I appreciate your faith in my commitment to a bit, but no way, come on, that\'d be super annoying.');
}
