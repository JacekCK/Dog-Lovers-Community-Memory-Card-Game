// must write name before page loaded

let username;

function requiredInput() {
    do {
        username = prompt("Welcome to Dog Lovers Memory Game \n\nTo proceed please enter your Name: ");
    }
    while (username.length < 2);
    document.getElementById("myinput").value = username;

};
requiredInput();

