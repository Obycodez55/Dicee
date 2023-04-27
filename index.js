// Random Image function
function getRandomImage1() {
  // First Image

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomImage = "dice" + randomNumber1 + ".png";

  var randomImageSource = "images/" + randomImage;

  document.getElementById("img1").setAttribute("src", randomImageSource);

  return randomNumber1;
}

function getRandomImage2() {
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImage2 = "dice" + randomNumber2 + ".png";

  var randomImageSource2 = "images/" + randomImage2;

  document.getElementById("img2").setAttribute("src", randomImageSource2);
  return randomNumber2;
}

function capitalizeFirstLetter(input) {
    var firstLetter = input.slice(0, 1);
    var upperCaseFirstLetter = firstLetter.toUpperCase();
    var restOfName = input.slice(1, input.length);
    var lowerRestOfName = restOfName.toLowerCase();
    var name = upperCaseFirstLetter + lowerRestOfName;
    return name;
  }

function play() {
  var player1 = capitalizeFirstLetter(document.getElementById("player1").value);
  var player2 = capitalizeFirstLetter(document.getElementById("player2").value);

  document.getElementsByClassName("playername")[0].innerHTML = player1;
  document.getElementsByClassName("playername")[1].innerHTML = player2;

  var randomNumber1 = getRandomImage1();
  var randomNumber2 = getRandomImage2();

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".result").innerHTML = "🚩" + player1 + " Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".result").innerHTML = player2 + " Wins! 🚩";
  } else {
    document.querySelector(".result").innerHTML = " Draw! ";
  }
}
