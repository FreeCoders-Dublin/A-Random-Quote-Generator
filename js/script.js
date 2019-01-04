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
var oggettoCitazione;
var randomNumber;
var body = document.querySelector('body');
var html = document.querySelector('#quote-box');

var quotes = [
  {
    quote: 'questa e` la prima citazione',
    source: 'lorenzo1',
    year: 1985,
    citation: 'testo random'
  },
  {

    quote: 'questa e` la seconda citazione',
    source: 'lorenzo2',
    year: 1985,
    citation: 'testo random'
  },
  {

    quote: 'questa e` la terza citazione',
    source: 'lorenzo3'

  },
  {

    quote: 'questa e` la quarta citazione',
    source: 'lorenzo4'


  },
  {

    quote: 'questa e` la quinta citazione',
    source: 'lorenzo5'

  }
];

// /***
//   Create the `getRandomQuote` function to:
//    - generate a random number
//    - use the random number to `return` a random quote object from the
//      `quotes` array.
// ***/

function getRandomQuote(list) {
    //generate a random number
   randomNumber = Math.floor(Math.random() * list.length);
    //get a random quote object from the array
   return list[randomNumber];

}
// /***
//   Create the `printQuote` function to:
//    - call the `getRandomQuote` function and assign it to a variable.
//    - use the properties of the quote object stored in the variable to
//      create your HTML string.   - use conditionals to make sure the optional properties exist before
//      they are added to the HTML string.
//    - set the `innerHTML` of the `quote-box` div to the HTML string.
// ***/

function printQuote() {
  //call the `getRandomQuote` function and assign it to a variable.
  oggettoCitazione = getRandomQuote(quotes);
  //use the properties of the quote object stored in the variable to
  //create your HTML string.
  html.innerHTML = '<div id="quote-box">';
  html.innerHTML += '<p class="quote tracking-in-contract ">'+oggettoCitazione.quote+'</p>';
  html.innerHTML += '<span class="source tracking-in-contract">'+oggettoCitazione.source+'</span>';
  // - use conditionals to make sure the optional properties exist before
  //  they are added to the HTML string.
  if(oggettoCitazione.hasOwnProperty('citation')) {
      html.innerHTML += '<span class="citation">'+oggettoCitazione.citation+'</span>';
    }
  if(oggettoCitazione.hasOwnProperty('year')) {

        html.innerHTML += '<span class="year">'+oggettoCitazione.year+'</span></span>';
    }
  html.innerHTML += '</div>';
  // - set the `innerHTML` of the `quote-box` div to the HTML string.
}



// /***
//   When the "Show another quote" button is clicked, the event listener
//   below will be triggered, and it will call, or "invoke", the `printQuote`
//   function. So do not make any changes to the line of code below this
//   comment.
// ***/

 document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// // Remember to delete the comments that came with this file, and replace them with your own code comments.
