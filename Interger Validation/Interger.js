function submit()
{

    var red = document.getElementById("red").value;
    var white = document.getElementById("white").value;
    var blue = document.getElementById("blue").value;

    let largest;

    if (red > white && red > blue) {
        largest = red;
    }
    else if (white > red && white > blue) {
        largest = white;
    }
    else if (blue > white && blue > red) {
        largest = blue;
    }

    alert("The largest number is " + largest);
}
