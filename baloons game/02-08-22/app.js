let colors = [
    "Tomato",
    "Orange",
    "DodgerBlue",
    "MediumSeaGreen",
    "Gray",
    "SlateBlue",
    "Violet",
    "LightGray"
]

var findColor = colors[Math.floor(Math.random() * colors.length)]
console.log(findColor)
for (var i = 0; i < 30; i++) {
    var ballon = document.getElementById(`ballon-${i}`);
    ballon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

function findBalloon(balloon) {
    console.log("reddddd")
    var ballon = document.getElementById(balloon);
    console.log("reddddd", ballon.style.backgroundColor)

    if (findColor.toLowerCase() === ballon.style.backgroundColor) {
        console.log("00000000")
    }
}