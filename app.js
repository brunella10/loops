'use strict';
// var test = 'hello';
// alert(test);
// function names(){
  var userName = prompt('Hi! Glad you are here. What is your name?');
  alert ('Hi! ' +userName+ ', nice to meet you! I am going to ask you some random questions about me. Please answer with yes or no.');
    console.log('The user name is ' +userName+ '.');
// }
// names();

  var AnswerOne = prompt('Do you think I like cats?'); //.toLoweCase().trim();
  //in order to have some answer and keep moving we made a if loop
    if(AnswerOne === 'yes') {
      alert('You are right! ' +userName+ ', I like cats! I have a yellow taby name Peluso.');
    } else if (AnswerOne === 'no') {
      alert('Sorry ' +userName+ ', I do love cats, I have one name Peluso and he have been with me all over the world')
    } else {
    alert('Sorry ' +userName+ ', You did not enter a valid answer, please check your typo and try again!')
  }
//if statement after use .toLoweCase add || AnswerOne === 'n' or || AnswerOne === 'y'
console.log(userName+ 'thinks' +AnswerOne+ 'to me liking cats.')

var AnswerTwo = prompt('Do you think I have siblings?'); //.toLoweCase().trim();
  //in order to have some answer and keep moving we made a if loop
    if(AnswerTwo === 'yes' || AnswerTwo === 'y') {
      alert('That is correct! ' +userName+ ', I have one younger brother! He lives in Peru with my mom.');
    } else if (AnswerTwo === 'no' || AnswerTwo === 'n') {
      alert('That is not correct ' +userName+ ', I do have a brother, he is one year younguer than me')
    } else {
    alert('Sorry ' +userName+ ', You did not enter a valid answer, please check your typo and try again!')
  }
//if statement after use .toLoweCase add || AnswerOne === 'n' or || AnswerOne === 'y'
console.log(+userName+ ' thinks ' +AnswerTow+ ' to me liking cats.')

//in order to have some answer and keep moving we made a if loop
