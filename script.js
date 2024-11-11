let spongebobQuotes = ["I'm Ready, I'm Ready, I'm Ready!", 
    "I Don't Need It. I Don't Need It. I DEFINITELY Don't Need It... I NEED IT!", "You Don't Need a License to Drive a Sandwich.", 
    "The Krusty Krab is Unfair! Mr. Krabs is in There! Standing at the Concession! Plotting His Oppression!", 
    "I’ll have you know that I stubbed by toe last week and only cried for 20 minutes."];

let patrickQuotes = ["Is Mayonnaise an Instrument?", "Firmly Grasp It!", 
    "The Inner Machinations of My Mind Are an Enigma.", "I Can't See My Forehead!", 
    "I Wumbo, You Wumbo, He, She, We Wumbo. Wumboing, Wumbology, the Study of Wumbo!"];

let squidwardQuotes = ["I Knew I Shouldn’t Have Gotten Out Of Bed Today", "When I Die, You Stay Away From My Funeral", 
    "Please Come Again. When I'm Not Working", "That lemon has 3 seeds in it. THAT'S AN ODD NUMBER! I can't eat anything odd numbered!", 
    "That lemon has 3 seeds in it. THAT'S AN ODD NUMBER! I can't eat anything odd numbered!"];

function getRandomQuote() {
    let randomCharacter = Math.floor(Math.random() * 3);
    let randomQuote = Math.floor(Math.random() * 5);
    if (randomCharacter === 0) {
        return `"${spongebobQuotes[randomQuote]}" - Spongebob`;
    } 
    else if (randomCharacter === 1) {
        return `"${patrickQuotes[randomQuote]}" - Patrick`;
    }
    else if (randomCharacter === 2) {
        return `"${squidwardQuotes[randomQuote]}" - Squidward`;
    }
}

console.log(getRandomQuote());