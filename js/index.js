// Left Dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

document.querySelector(".limage").setAttribute("src",randomImageSource);

// Right Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelector(".rimage").setAttribute("src",randomImageSource2);

// Winning Text
    if(randomNumber1 === randomNumber2){
        document.querySelector(".winnername").innerHTML = "It's a tie ! ";
    }
    else if(randomNumber1 > randomNumber2){
        document.querySelector(".winnername").innerHTML = "Player 1 Wins ! ";
    }
    else{
        document.querySelector(".winnername").innerHTML = "Player 2 Wins ! ";
    }



