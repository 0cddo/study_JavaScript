const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
// Show New Quote
function newQuote() {
  // new Quote 버튼을 누를 때 getQuotes 함수가 무시되고 newQuote함수만 실행되기 때문에 버튼을 두세번 누르면 getQuotes 함수가 무시되서, 기능을 확실하게 하기 위해 loading 함수를 추가로 넣는다
  loading();

  //  pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  // Check if Author is blank and replace it with 'Unknow'
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  // Check Quote length to determine styling
  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete();
}

// Get Quotes From API
async function getQuotes() {
  loading();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes[12]);
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// Tweet Quote(트위터 버튼 함수)
// 템플릿 스트링 (text)
function twitterQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', twitterQuote);

// on Load
getQuotes();
