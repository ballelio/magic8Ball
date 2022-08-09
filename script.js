$(document).ready(function(){
var magic8ball = {};

magic8ball.listOfAnswers = ["Yes", "No","I don\'t think so", "It might happen", "You wish!", "Consider it done"];

magic8ball.askQuestion = function(question){
  var randomNumber = Math.random();
  var randomNumberArray = randomNumber * this.listOfAnswers.length;
  var randomIndex = Math.floor(randomNumberArray);
  var randomAnswer = this.listOfAnswers[randomIndex];
$("#answer").text( randomAnswer );
$("#8ball").effect("shake");
$("#answer").hide();
$("#answer").fadeIn(4000);
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
};

var onClick = function() {
$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
setTimeout(
       function() {
         var question = prompt("ASK A YES/NO QUESTION!");
         magic8ball.askQuestion(question)
       }, 800)
	};

 $("#questionButton").click(onClick);

});
