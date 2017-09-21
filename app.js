'use strict';
// introduce visitor to page and establish answer counter
var userName = prompt('Why hello there! This is Nick\'s about-me page. What\'s your name, stranger?');
var correctAnswers = 0;

//answer arrays
var yesNoQustions = [
  ['Do I live a life devoid of meaning?',
    'N',
    'NO',
    'Not to get all existential, but the only thing that gives me meaning is LEARNING JAVASCRIPT (for the next few months, at least) [CORRECT]',
    'Wow jeez, come on, it\'s only question one, I\'m not gonna get all dark and gothy on you already, of course I do!',],
  ['Do I have a mascot?',
    'Y',
    'YES',
    'Yea! He\'s an obnoxious little cat named Brougham who regularly misses me while I\'m at class. [CORRECT]',
    'That would be sad and lonely; that\'s why I have a cat named Brougham!'],
  ['More whiskey?',
    'Y',
    'YES',
    'HOO BOY YOU BETTER BELIEVE IT! [CORRECT]',
    'I mean, I guess I\'m good for now, sure. But if you know me, you know the answer\'s yes.'],
  ['Can I code?',
    'Y',
    'YES',
    'And with increasing skill each day! [CORRECT]',
    'I know I\'m new at this, but have a little faith in me, sheesh.'],
  ['Will you high-five me?',
    'Y',
    'YES',
    'Hey com\'on don\'t leave me hanging here!',
    'Yeah buddy! I knew we\'d get along, let\'s party! [CORRECT]']
];

//quick introduction alert to user
alert('Well ahoy-hoy, ' + userName + '! Since you\'re here, how about we play a quick guessing game by way of introduction? Please answer the next few questions with yes or no.');
console.log('userName value is', userName);

//function that iterates through Y/N questions and array answers
function yesNoFunction(){
  for(var i = 0; i < 5; i++){
    var answer1 = prompt(yesNoQustions[i][0]).toUpperCase();
    console.log( yesNoQustions[i][0], answer1);

    if (answer1 === yesNoQustions[i][1] || answer1 === yesNoQustions[i][2]){
      alert(yesNoQustions[i][3]);
      correctAnswers++;
    } else {
      alert(yesNoQustions[i][4]);
    }
  }
}
yesNoFunction();

// Pinball table guessing game - question 6
function question6(){
  alert('Now a new challenge! Guess how many different pinball tables are at my favorite pinball bar, Flip Flip Ding Ding! You have four tries to get it right - I\'ll give you hints if you\'ve guessed too high or too low!');
  for (var i = 0; i < 4; i++){
    var userGuess = parseInt(prompt('How many pinball tables at Flip Flip?'));
    if (userGuess === 27) {
      alert('That\'s exactly right! 27!');
      correctAnswers++;
      break;
    } else if (userGuess < 27) {
      alert('Too few, guess higher next time! You have ' + (3 - i) + ' tries remaining.');
    } else if (userGuess > 27) {
      alert('I wish they had that many, but guess lower next time! You have ' + (3 - i) + ' tries remaining.');
    } else alert('sorry, didn\'t understand that.');
  }
}
question6();

//Question 7 - name a country I visited on my travels
function question7(){
  alert('Ok, on to a new challenge! I spent time backpacking in East Asia. Name any one country I visited to score another correct answer! You have SIX tries this time.');
  var nationsVisited = ['cambodia', 'vietnam', 'philippines', 'taiwan', 'korea', 'china'];
  for (var i = 0; i < 6; i++) {
    var userGuess = prompt('Name a country I visited!').toLowerCase();
    var guessEval = nationsVisited.indexOf(userGuess);
    console.log('Guess value is', guessEval);
    if (guessEval === -1){
      alert('Nope, didn\'t go there. You have ' + (5 - i) + ' tries remaining.');
      if (i === 5){
        alert('Sorry, you\'re out of guesses!');
        break;
      }
    } else {
      alert('Yeah! Went there!');
      correctAnswers++;
      break;
    }
  }
  alert('Here are the countries I did visit: Cambodia, Vietnam, Philippines, Taiwan, Korea, and China.');
}
question7();

//Give the user a personalized bit of feedback on how they did, depending on number of correct answers (value of correctAnswers)
function correctAnswersFeedback(){
  console.log('number of correct answers:', correctAnswers);
  if (correctAnswers < 3) {
    alert('Well, ' + userName + ' , you only got ' + correctAnswers + ' out of 7 correct. Let\'s get go a drink and hash this problem out.');
  } else if ((correctAnswers >= 3) && (correctAnswers < 7)) {
    alert('Hey, we must have met before! You got ' + correctAnswers + ' out of 7 correct! But there\'s still more to learn, nobody\'s perfect?');
  } else alert('YOU KNOW ME SO WELL, IT WORRIES ME. How\'d you get all ' + correctAnswers + ' out of 7 right!? I call \'sploits.');
}
correctAnswersFeedback();
