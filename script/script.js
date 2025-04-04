
function showMessage()
{
  
    let x = 5;
    let name = "Fire Giant";
    let msg = "Hello "  +name + " whats up";
    let reply = "AAAGGHHHHHHHH"
    alert(msg);
    alert(reply)
}

function checkAge()
{
    let age = 100;
    if (age>=20)
    {
        alert("YOU ARE OVER 20. " +"You are: " + age + " years old.")
    }
    else 
    {
        alert("You are NOT over 20")
    }
}

function showMany()
{
    for(let i=1;i<=10;i=i+1)
    {
        alert("Don't Close Me! You have clicked me " + i + " times")
    }
}

function changeColor()
{
    document.getElementById("main").style.backgroundColor="#fff";
    document.getElementById("main").style.color="black" ;
    if (backgroundColor="fff")
    {
        backgroundColor=""
    }
}

function GoTo()
{
    window.open("https://www.solomusicgear.com")
}

function changeTheme()
{
    document.getElementById("css").style.href="./css/stylesalternate.css"
}