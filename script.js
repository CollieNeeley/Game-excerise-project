document.addEventListener("DOM-ContentLoaded", function() {
    console.log("Javascript is running");
    const quotes = [
    ' "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." - Albert Einstein' ,
    ' "Things are not always what they seem; the first appearence deceives many; the intelligence of a few perceives what has been carefully hidden." - Phaedrus'
];

let currentIndex = 0;

//function to change quote 
function changeQuote() {
    console.log("Changing quote");
    const quoteText = document.getElementById('quote-text');
    if (quoteText) {
    quoteText.innerHTML = quotes[currentIndex];
    currentIndex = (currentIndex + 1) % quotes.length;
} else {
    console.error("Element with id 'quote-text' not found");
}
}

//call the changeQuote function once to set the intial quote
changeQuote();

//set quote to change every 10 seconds
setInterval(changeQuote, 10000);
});

//login form started here 

function showRegisterForm() {

    document.getElementById("loginForm").style.display = "none";

    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {

    document.getElementById("registerForm").style.display = "none";

    document.getElementById("loginForm").style.display = "block";
}
