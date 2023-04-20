function randomImages(images) {
    var index = Math.floor(Math.random() * images.length);
    return images[index];
}

const images = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];
let heading = document.querySelector("h1");

let player1 = randomImages(images);
let player2 = randomImages(images);
document.querySelector('.img1').setAttribute("src", `images/${player1}.png`);
document.querySelector('.img2').setAttribute("src", `images/${player2}.png`);

if (player1 > player2) {
    document.querySelector("h1").textContent = '🚩Player 1 Wins!';
   document.getElementById("MainHeading").appendChild(flag);
    
}
else if (player1 < player2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").textContent = "🚩Both Won🚩";
}