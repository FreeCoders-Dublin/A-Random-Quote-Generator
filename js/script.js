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




/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/




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

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// it changes the color based on a random string decoded on 16.
let changeColorBg = () => {
  let colorSelected = "#"+((1<<24)*Math.random()|0).toString(16);
  document.body.style.backgroundColor = colorSelected;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.