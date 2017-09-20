'use strict';

var userName = prompt('Why hello there! This is Nick\'s about-me page. What\'s your name, stranger?');
var correctAnswers = 0;

alert('Well ahoy-hoy, ' + userName + '! Since you\'re here, how about we play a quick guessing game by way of introduction? Please answer the next few questions with yes or no.');
console.log('userName value is', userName);

var answer1 = prompt('Do I live my life according to a code of morality and ethics?').toUpperCase();
console.log('answer1 value is', answer1);

if (answer1 === 'N' || answer1 === 'NO') {
  alert('I spent far too much time in introspective inflection for that to be true, sadly.');
} else {
  alert('While you\'re correct, it\'s a pretty thin one when\'s all said and done, and it\'s easily defeated by decent whiskey. [CORRECT]');
  correctAnswers++;
}

var answer2 = prompt('Do I have a mascot?').toUpperCase();
console.log('answer2 value is', answer2);

if (answer2 === 'Y' || answer2 === 'YES' || answer2 === 'YAR') {
  alert('Yea! He\'s an obnoxious little cat named Brougham who regularly misses me while I\'m at class. [CORRECT]');
  correctAnswers++;
} else {
  alert('That would be sad and lonely; that\'s why I have a cat named Brougham!');
}

var answer3 = prompt('More whiskey?').toUpperCase();
console.log('answer3 value is', answer3);

if (answer3 === 'Y' || answer3 === 'YES') {
  alert('HOO BOY YOU BETTER BELIEVE IT! [CORRECT]');
  correctAnswers++;
} else {
  alert('I mean, I guess I\'m good for now, sure. :-/');
}

var answer4 = prompt('Can I code?').toUpperCase();
console.log('answer4 value is', answer4);

if (answer4 === 'Y' || answer4 === 'YES') {
  alert('And with increasing skill each day! [CORRECT]');
  correctAnswers++;
} else {
  alert('I know I\'m new at this, but have a little faith in me, sheesh.');
}

var answer5 = prompt('Will you high-five me?').toUpperCase();
console.log('answer5 value is', answer5);

if (answer5 === 'N' || answer5 === 'NO') {
  alert('Hey com\'on don\'t leave men hanging here!');
} else {
  alert('Yeah buddy I knew we\'d get along, let\'s party! [CORRECT]');
  correctAnswers++;
}
console.log('number of correct answers:', correctAnswers);
// //As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

alert('Now a new challenge! Guess how many different pinball tables are at my favorite pinball bar, Flip Flip Ding Ding! You have four tries to get it right - I\'ll give you hints if you\'ve guessed too high or too low!');
prompt('How many pinball tables at Flip Flip?');
