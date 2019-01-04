/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/


var quotes = [
  {
    quote: "Debajo de tu piel vive la luna",
    source: "Pablo Neruda",
    citation: "Oda a la Bella Desnuda",
    year: 1956,
    tags: "Category: Poetry"
  },
  {
    quote: "A man's got to take a lot of punishment to write a really funny book",
    source: "Ernest Hemingway",
    citation: "Letter",
    year: 1924
  },
  {
    quote: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice",
    source: "Gabriel García Márquez",
    citation: "One Hundred Years of Solitude",
    year: 1967,
    tags: "Category: Magic realism"
  },
  {
    quote: "We never stop reading, although every book comes to an end, just as we never stop living, although death is certain",
    source: "Roberto Bolaño",
    citation: "Last Evenings on Earth",
    year: 2006
  },
  {
    quote: "A los niños nadie les enseña algunas cosas indispensables, como arreglar una llave que gotea, sobornar a un funcionario o cortarle el pelo al perro",
    source: "Isabel Allende",
    citation: "Caracas"
  }
]


/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function rgbRandom() {
  return Math.floor(Math.random() * 256);
}

function changeColour() {
  var colour = 'rgb(' + rgbRandom() + ', ' + rgbRandom() + ', ' + rgbRandom() + ')';
  document.body.style.backgroundColor = colour;
}


function getRandomQuote() {
   var randomQuote = Math.floor(Math.random() * (quotes.length));
   return quotes[randomQuote];
}


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/


function printQuote() {
   changeColour();

   var selectedQuote = getRandomQuote();
   
   var contentHtml = `
    <p class="quote"> ${selectedQuote.quote}</p>
    <p class="source"> ${selectedQuote.source}
      <span class="citation">${selectedQuote.citation}</span>
        ${selectedQuote.year ? `<span class="year">${selectedQuote.year}</span>` : ""}
        ${selectedQuote.tags ? `<p class="tags">${selectedQuote.tags}</p>` : ""} 
    </p>`;

    document.getElementById('quote-box').innerHTML = contentHtml;
  }


   /*
   var string = "";
   string += '<p class="quote">' + selectedQuote.quote + '</p>';
   string += '<p class="source">' + selectedQuote.source;
   string += '<span class="citation">' + selectedQuote.citation + '</span>';
   if (selectedQuote.year !== "") {
    string += '<span class="year">' + selectedQuote.year + '</span>';
   }
   if (selectedQuote.tags !== "") {
    string += '<span class="tags">' + selectedQuote.tags + '</span>';
   }
   string += '</p>';

   document.getElementById('quote-box').innerHTML = string;
   
}
*/

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.