// let apiQuotes = [];

// Show New Quote
function newQuote() {
  //  pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // console.log(localQuotes.length);
  console.log(localQuotes.indexOf(quote));
  console.log(quote);
}
// Get Quotes From API
/* async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes[12]);
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
} */

// on Load
// getQuotes();

// locally use data
newQuote();
