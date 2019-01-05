// Create the array of quote objects and name it `quotes`.

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



//Created the `getRandomQuote` function to:
// - generate a random number
// - use the random number to `return` a random quote object from the`quotes` array.

function getRandomQuote(list) {
    //generate a random number
   randomNumber = Math.floor(Math.random() * list.length);
    //get a random quote object from the array
   return list[randomNumber];

}




//Create the `printQuote` function to:
//   - call the `getRandomQuote` function and assign it to a variable.
//  - use the properties of the quote object stored in the variable to create HTML string.

function printQuote() {
  changeColorBg();

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


// it changes the color based on a random string decoded on 16.
let changeColorBg = () => {
  let colorSelected = "#"+((1<<24)*Math.random()|0).toString(16);
  document.body.style.backgroundColor = colorSelected;
}

// When the "Show another quote" button is clicked, the event listener
// will call the `printQuote`function.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.addEventListener("DOMContentLoaded", printQuote, false);

