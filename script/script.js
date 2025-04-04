
function showMessage()
{
  
    let msg = "Hello World!";
    let reply = "Ahh!"
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

}

function changeColorBack()
{
    document.getElementById("main").style.backgroundColor="#701b1b";
    document.getElementById("main").style.color="white" ;
}
function GoTo()
{
    window.open("https://www.solomusicgear.com")
}

function countUp()
{let count = 0;
    document.getElementById('buttonCounter').onclick = function() {
         count = count + 1;
         document.getElementById('counter').innerHTML = "You have clicked the counter " + count + " times."
    }}



