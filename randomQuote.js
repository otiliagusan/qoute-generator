// Targeting the elements in the page
const copyButton = document.querySelector('.copy');
const newQuoteButton = document.querySelector('.new-quote');
const quoteContainer = document.querySelector('#quote');
const authorContainer = document.querySelector('#author');

// Defining 5 objects which contain the quotes and authors
const quote1 = {
  quote: '“Be yourself; everyone else is already taken.”',
  author: 'Oscar Wilde',
};
const quote2 = {
  quote: '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
  author: 'Albert Einstein',
};
const quote3 = {
  quote: '“A room without books is like a body without a soul.”',
  author: 'Marcus Tullius Cicero',
};
const quote4 = {
  quote: '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
  author: 'Ralph Waldo Emerson',
};
const quote5 = {
  quote: '“Insanity is doing the same thing, over and over again, but expecting different results.”',
  author: 'Anonymous',
};

// Combining the objects in an array
const quotes = [quote1, quote2, quote3, quote4, quote5];

// Function to generate a random number within a specific range
function random(number) {
  return Math.floor(Math.random() * number); // Use `number` for zero-based indexing
}

// Function to generate a new quote
function generateQuote() {
  // Pick a random quote from the quotes array
  const randomIndex = random(quotes.length);
  const randomQuote = quotes[randomIndex];

  // Update the quote and author containers with the new quote
  quoteContainer.textContent = randomQuote.quote;
  authorContainer.textContent = `— ${randomQuote.author}`;
}

// Function to copy the quote to clipboard
function copyQuote() {
    if (quoteContainer.textContent != '') {
            //taking the content of quote and author conatiner
    const textToCopy = `${quoteContainer.textContent} ${authorContainer.textContent}`;

    //creating a temporary textarea to hold the text
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    //Select and copy the text
    tempTextArea.select();
    document.execCommand('copy');

    //remove the temporary text area
    document.body.removeChild(tempTextArea);

    //creating an alert to notify the user that the quote was copied
     alert('Quote copied to clipboard!');
    }
    else {
    //creating an alert to notify the user that the quote was copied
     alert('Press the New Quote button to generate your quote!'); 
   }
 }

newQuoteButton.addEventListener('click', generateQuote);
copyButton.addEventListener('click', copyQuote);