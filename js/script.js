/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
Author: Luca Tardito
******************************************/

// it contains objects of quotetions with required properties (quote and source)
let quotes = [ 
  {
    quote: "Debajo de tu piel vive la luna",
    source: "Pablo Neruda",
    citation: "Oda a la Bella Desnuda",
    year: 1956,
    tags: "Poetry"
  },
  {
    quote: "A man's got to take a lot of punishment to write a really funny book",
    source: "Ernest Hemingway",
    year: 1924,
  },
  {
    quote: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice",
    source: "Gabriel García Márquez",
    citation: "One Hundred Years of Solitude",
    year: 1967,
    tags: "Magic realism"
  },
  {
    quote: "We never stop reading, although every book comes to an end, just as we never stop living, although death is certain",
    source: "Roberto Bolaño",
    citation: "Last Evenings on Earth",
    year: 2006,
  },
  {
    quote: "A los niños nadie les enseña algunas cosas indispensables, como arreglar una llave que gotea, sobornar a un funcionario o cortarle el pelo al perro",
    source: "Isabel Allende",
    citation: "Caracas",
  }
];

// it returns a quote object random selected.
let getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

// it injects the Html content inside #quote-box
let printQuote = () => {
  let selectedQuote = getRandomQuote();
  changeColorBg();
  let contentHtml = `
    <p class="quote"> ${selectedQuote.quote} </p>
    <p class="source">${selectedQuote.source}
      ${ selectedQuote.citation ? `<span class="citation">${selectedQuote.citation}</span>` : "" }
      ${ selectedQuote.year ? `<span class="year">${selectedQuote.year}</span>` : "" }
    </p>`;
  document.querySelector('#quote-box').innerHTML = contentHtml;
}

// it changes the color based on a random string decoded on 16.
let changeColorBg = () => {
  let colorSelected = "#"+((1<<24)*Math.random()|0).toString(16);
  document.body.style.backgroundColor = colorSelected;
}

// start point and button function
document.addEventListener("DOMContentLoaded", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
