
document.getElementById("welcome").innerHTML = greeting();




function greeting()
{
    let greetings = ["Howdy", "Hello", "Salutations", "Welcome", "Hi", "Nice to meet you", "G'day", "Hey"];
    return greetings[Math.floor(Math.random() * greetings.length)];
}