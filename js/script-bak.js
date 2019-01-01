/***
ARRAY OF QUOTES
Created this array with lyrics from my favourite Progressive Rock bands and purposely removed some of the properties to test my code.
The indentation I chose particularly for this array fits me visually but is inconsistent regarding the rest of the program.
***/
var quotes = [
    {
        quote: "You don't get something for nothing <br> You can't have freedom for free",
        source: "Rush",
        citation: "Something For Nothing",
        year: "1976",
		tags: "Category: Motivational"
    },
	{
		quote: "Out through the night <br> An' the whispering breezes <br> To the place where they keep <br> The Imaginary Diseases",
		source:"Frank Zappa",
		citation: "Stink-Foot",
		year:"1974",
		tags: "Category: Artistic"
	},
    {
        quote: "With, without... <br> And who'll deny it's what the fighting's all about?",
        source: "Pink Floyd",
        year: "1973",
		tags: "Category: Political"
    },
    {
        quote: "Really don't mind if you sit this one out <br> My word's but a whisper your deafness a shout <br> I may make you feel but I can't make you think <br> Your sperm's in the gutter your love's in the sink",
        source: "Jethro Tull",
        citation: "Thick As A Brick",
        year: "1972",
		tags: "Category: Controversial"
    },
    {
        quote: "Don't surround yourself with yourself <br> Move on back two squares <br> Send an instant karma to me <br> Initial it with loving care",
        source: "Yes",
        citation: "I've Seen All Good People",
        year: "1971",
		tags: "Category: Friendly"
    },
    {
        quote: "You don't possess me, don't impress me <br> Just upset my mind <br> Can't instruct me or conduct me <br> Just use up my time",
        source: "King Crimson",
        citation: "I Talk To The Wind",
		tags: "Category: Thoughtful"
    },
    {
        quote: "Oh, let the sun beat down upon my face <br> Stars fill my dream <br> I'm a traveler of both time and space <br> To be where I have been",
        source: "Led Zeppelin",
		tags: "Category: Mystical"
    },
    {
        quote: "We had a lot of luck on Venus <br> We always had a ball on Mars <br> Meeting all the groovey people <br> We've rocked the Milky Way so far",
        source: "Deep Purple",
        citation: "Space Truckin'",
		tags: "Category: Imaginative"
    },
    {
        quote: "Picture yourself in a boat on a river <br> With tangerine trees and marmalade skies <br> Somebody calls you, you answer quite slowly <br> A girl with kaleidoscope eyes",
        source: "The Beatles",
        citation: "Lucy In The Sky With Diamonds",
        year: "1967",
		tags: "Category: Psychedelic"
    },
]
/***
OTHER VARIABLES
Just like it was explained on the course, it is better to declare the variables at the top of the program, although in this case the only necessary one is the randomQuote that will hold the previous printed quote.
***/
var randomQuote;
var message;

function getRandomQuote (newQuote) {
	do {
		var newQuote = quotes[Math.floor(Math.random() * quotes.length)];
	} while (newQuote === randomQuote);
	return newQuote;
}

/***
RANDOMIZER FUNCTION FOR WEB COLORS
It works almost in the same manner as the getRandomQuote function but 
In this case, I just use only the letters and the shorthand of three digits to make them all fit a certain color range that looks more aesthetically pleasing. 
To fully randomize, simply add the numbers from 0 to 9 to the variable "hexValues" (copy & paste 0123456789ABCDEF) and put i < 6 in the for loop to use six digit version.
***/
function getRandomColor() {
	var hexValues = "ABCDEF";
	var color = "#";
	for (var i = 0; i < 3; i++) {
		color += hexValues[Math.floor(Math.random() * hexValues.length)];
	}
	return color;
}

function printQuote () {
	randomQuote = getRandomQuote();

	message = "<p class='quote'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source;
	
	for (var prop in randomQuote) {
		if ( prop !== "quote" & prop !== "source" ){
				message += "<span class='" + prop + "'>" + randomQuote[prop] + "</span>"
		}
	}

	message += "</p>";
	
	document.getElementById("quote-box")
	.innerHTML = message;
	
	document.body.style.background = getRandomColor();

	return randomQuote;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
