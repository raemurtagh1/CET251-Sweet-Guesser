function checkGuess()
{
    //Get the value from the text input box
    let txtUserGuess = document.getElementById("UserGuessInput").value;

    //if the user's guess is 500
    if (txtUserGuess == 500)
    {
        document.getElementById("BtnGuess").disabled = true;
        document.getElementById("WinResult").innerHTML = "You have guessed correctly! Well done :)";
        document.getElementById("Result").innerHTML = "";
        document.getElementById("Attempts").innerHTML = "";
        document.getElementById("Scale").style.color = "#d12a04";
        document.getElementById("Scale").innerHTML = "How close = Got it!";
    }
    else if (txtUserGuess > 1 && txtUserGuess < 100 || txtUserGuess > 1300 && txtUserGuess < 1500)
    {
        document.getElementById("Result").innerHTML = "You haven't guessed correctly... please try again";
        document.getElementById("Scale").style.color = "#1ab3d9";
        document.getElementById("Scale").innerHTML = "How close = Freezing brrr";
    }
    else if (txtUserGuess > 100 && txtUserGuess < 200 || txtUserGuess > 1100 && txtUserGuess < 1300)
    {
        document.getElementById("Result").innerHTML = "You haven't guessed correctly... please try again";
        document.getElementById("Scale").style.color = "#8bb9c4";
        document.getElementById("Scale").innerHTML = "How close = Cold";
    }
    else if (txtUserGuess > 200 && txtUserGuess < 300 || txtUserGuess > 900 && txtUserGuess < 1100)
    {
        document.getElementById("Result").innerHTML = "You haven't guessed correctly... please try again";
        document.getElementById("Scale").style.color = "darkorange";
        document.getElementById("Scale").innerHTML = "How close = Getting Warmer...";
    }
    else if (txtUserGuess > 300 && txtUserGuess < 400 || txtUserGuess > 700 && txtUserGuess < 900)
    {
        document.getElementById("Result").innerHTML = "You haven't guessed correctly... please try again";
        document.getElementById("Scale").style.color = "#db6618";
        document.getElementById("Scale").innerHTML = "How close = Hot!!";
    }
    else if (txtUserGuess > 400 && txtUserGuess < 499 || txtUserGuess > 501 && txtUserGuess < 700)
    {
        document.getElementById("Result").innerHTML = "You haven't guessed correctly... please try again";
        document.getElementById("Scale").style.color = "red";
        document.getElementById("Scale").innerHTML = "How close = Really hot!!";
    }
    else if(txtUserGuess > 1500)
    {
        document.getElementById("Result").innerHTML = "Your guess is too high! <br> Please try again.";
        document.getElementById("Scale").style.color = "#1ab3d9";
        document.getElementById("Scale").innerHTML = "How close = Freezing brrr";
    }
}

//Creating a variable called count and setting it's value to 1
let count = 0;
function attempts()
{
    //Adding 1 to count each time
    count++;

    //if count is over 5
    if(count > 4)
    {
        //Disable the button
        document.getElementById("BtnGuess").disabled = true;
        document.getElementById("Attempts").innerHTML = "";
        //Say to the user that they have used all of their guesses
        document.getElementById("Result").innerHTML = "You have used all of your guesses...";
    }
    else if(count == 1)
    {
        document.getElementById("Attempts").innerHTML = "Attempts left = 4";
    }
    else if(count == 2)
    {
        document.getElementById("Attempts").innerHTML = "Attempts left = 3";
    }
    else if(count == 3)
    {
        document.getElementById("Attempts").innerHTML = "Attempts left = 2";
    }
    else if(count == 4)
    {
        document.getElementById("Attempts").innerHTML = "Attempts left = 1";
    }
}