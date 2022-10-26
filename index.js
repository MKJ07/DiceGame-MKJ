var player1 = prompt("Enter the name of the first player");
player1=player1.toUpperCase();
var player2 = prompt("Enter the name of the second player");
player2=player2.toUpperCase();
function diceGame() {
    var s = Math.floor(Math.random() * 6) + 1;
    var random1 = "dice" + s + ".png";
    var randomImageSource = "images/" + random1; //images/dice1.png - images/dice6.png
    var image1 = document.querySelectorAll(".r-2 img")[0]
    image1.setAttribute("src", randomImageSource);



    var d = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + d + ".png";
    document.querySelectorAll(".r-2 img")[1].setAttribute("src", randomImageSource2);

    if (s > d) {
        document.querySelector(".con h1").innerHTML = player1 + " Won The Game 🎌";
    }
    else if (d > s) {
        document.querySelector(".con h1").innerHTML = player2 + " Won The Game 🎌";
    }
    else {
        document.querySelector(".con h1").innerHTML = "Draw!!!";
    }
}
