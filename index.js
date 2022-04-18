function dice_game() {
    randomNumber1 = Math.floor(Math.random() * 5) + 1;
    randomNumber2 = Math.floor(Math.random() * 5) + 1;
    var str_img = ""
    console.log(str_img)
    var img1 = document.getElementsByClassName("img1")
    str_img = "images/dice" + randomNumber1.toString() + ".png"
    img1[0].setAttribute("src", str_img)

    var img2 = document.getElementsByClassName("img2")
    str_img = "images/dice" + randomNumber2.toString() + ".png"
    img2[0].setAttribute("src", str_img)

    var winner = "Draw!"
    if (randomNumber1 > randomNumber2)
        winner = "🚩Player 1 Wins!"
    if (randomNumber1 < randomNumber2)
        winner = "Player 2 Wins!🚩"

    var win = document.querySelector("h1")
    win.innerHTML = winner


}
dice_game()