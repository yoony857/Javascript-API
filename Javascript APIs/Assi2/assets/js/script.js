var replies = ["Hi", "I dont speak English!", "I speak CHARMANDER!!", "What do you want?", "I dont have money", "oops", "I am hungry"]; 
var sounds = ["say", "say1"]; 
var fire = ["fire", "fire2", "fire3", "fire4"]; 
var randomNum = 0; 
var randomEyes = 0; 
var audioElement;


function playSounds(r) {

audioElement.setAttribute('src', "assets/sound/" +sounds[r]+".mp3");
audioElement.play();
}
function randomNumGenerator(arrayName) { 

return Math.floor(Math.random() * arrayName.length);
}

function answerQuestion () {
  randomNum = randomNumGenerator(replies);
  console.log("Random reply: " + randomNum);

  $('#tell').text(replies[randomNum]);
  playSounds(randomNum);

  randomfire = randomNumGenerator(fire);
  $('#fire').css("background", "url('assets/img/"+ fire[randomfire] + ".png') no-repeat");
  $('#fire').css("background-size", "100% auto");

}


function init() {
  console.log('Hello World');

//YOUR CODE HERE
  audioElement = document.createElement('audio');
  audioElement.setAttribute('autoplay', 'autoplay');
  
  $('#enter').click(function(){
    answerQuestion();
  });

}


$(document).ready(function(){
  init();
}); 