/***
ARRAY OF QUOTES
Created this array with lyrics from my favourite Progressive Rock bands and purposely removed some of the properties to test my code.
***/
var quotes = [
    {
        quote: "You don't get something for nothing <br> You can't have freedom for free <br> You won't get wise with the sleep still in your eyes <br> No matter what your dream might be",
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
        quote: "Us, and them... <br> And after all we're only ordinary men <br> With, without... <br> And who'll deny it's what the fighting's all about?",
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
randomQuote: Will be returned from the printQuote function to store the last quote and compare it in the getRandomQuote function.
refreshQuote: This will hold the timeout to automatically change quote after a certain amount of time the user doesn't press the button.
message: Will hold the html formatted message to print on the screen.
***/
var randomQuote;
var refreshQuote;
var message;

/***
QUOTE RANDOMIZER
<<<<<<< HEAD
The do while loop was added as a way to avoid the quote to be repeated when pressing the button. Since randomQuote is returned from the function,
=======
<<<<<<< HEAD
The do while loop was added as a way to avoid the quote to be repeated when pressing the button. Since randomQuote is returned from the function,
=======
The do while loop was added as a way to avoid the quote to be repeated when pressing the button. Since randomQuote is returned from the function, 
>>>>>>> 52e243f84678fffa3199bc3fbe44dc6bad864dd0
>>>>>>> f665f4407bcbac3350b08c82cd67edd0a7c7d0ff
we can compare it with newQuote until they are different.
***/
function getRandomQuote () {
	do {
		var newQuote = quotes[Math.floor(Math.random() * quotes.length)];
	} while (newQuote === randomQuote);
	return newQuote;
}

/***
WEB COLORS RANDOMIZER
It works almost in the same manner as the getRandomQuote function but in this case, I just use only the lower numbers and the abreviated three digits code
to make them all fit a certain narrower color range that looks more aesthetically pleasing.

NOTE: To fully randomize, simply copy & paste 0123456789ABCDEF inside the variable and put i < 6 in the for loop to use the longer six digit version.
***/
function getRandomColor() {
<<<<<<< HEAD
	// var hexValues = 255;

var color = "rgb(";
color += (Math.floor(Math.random() * 255)) + ', ';
color += (Math.floor(Math.random() * 255)) + ', ';
color += Math.floor(Math.random() * 255);
color += ')';
=======
	var hexValues = "1234";
	var color = "#";
	for (var i = 0; i < 3; i++) {
		color += hexValues[Math.floor(Math.random() * hexValues.length)];
	}
>>>>>>> f665f4407bcbac3350b08c82cd67edd0a7c7d0ff
	return color;
}

/***
MESSAGE GENERATOR
This function is triggered both on DOM Ready and when clicking the "Show another quote" button.
- Allows to flexibly add more properties to the object by creating new <spans> through a for in loop.
- It refreshes the quote after 10 seconds of inactivity.
- Creates a random background color every time the quote changes.
***/
function printQuote () {
	clearTimeout (refreshQuote);
	randomQuote = getRandomQuote();
	message = "<p class='quote'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source;
	for (var prop in randomQuote) {
		if ( prop !== "quote" & prop !== "source" ){
				message += "<span class='" + prop + "'>" + randomQuote[prop] + "</span>"
		}
	}
	message += "</p>";
	document.getElementById("quote-box").innerHTML = message;
	document.body.style.background = getRandomColor();
	refreshQuote = setTimeout(printQuote, 10000);
	return randomQuote;
}

// This eventListener will trigger the printQuote function upon the click of the button.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
