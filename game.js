//Variables
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false; //variable used for tracked if the has started or not

//The main function for the game
function nextSequence() {
    level++;
    $('#level-title').text("Level" + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

//When a first key is pressd,I call the function
$(document).keypress(function () {
    if (!started) {
        $('#level-title').text("Level" + level);
        nextSequence();
        started = true;
    }
})

//Function that play a sond when I click a button 
function playSound(name) {
    let audioFile = new Audio('sounds/' + name + '.mp3');
    audioFile.play();
}


//Function that animate a button that was presed
function animatePress(currentColour) {
    $("#" + currentColour).addClass('pressed');
    setTimeout(function () {
        $("#" + currentColour).removeClass('pressed');
    }, 100);
}

//Function and variable that is used for verification
let userChosenColor;
function handlerFunction() {
    $(".btn").on('click', function () {
        userChosenColor = $(this).attr('id');
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
    })
}

handlerFunction()

// function checkAnswar(currentLevel) {

// }

