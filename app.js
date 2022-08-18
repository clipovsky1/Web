
document.getElementById("welcome").innerHTML = greeting();

function greeting()
{
    let greetings = ["Howdy", "Hello", "Welcome", "Hi", "G'day", "Hey"];
    return greetings[Math.floor(Math.random() * greetings.length)];
}