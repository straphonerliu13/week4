let quotes = [
  "May the Force be with you.",
  "I'm the king of the world!",
  "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
  "You can't handle the truth!",
  "If you build it, he will come.",
  "Keep your friends close, but your enemies closer.",
  "You talking to me?",
  "I'll have what she's having.",
  "You had me at 'hello'."
]

// Tasks:
// 1) loop through the movie quotes and write them to the output (with Tailwind)
// 2) refactor into cleaner, easier-to-understand functions

// EventTarget.addEventListener(type, listener)
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// Element.insertAdjacentHTML(position, text)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

function appendQuote(quote) {
  let outputElement = document.querySelector('.output')  
  outputElement.insertAdjacentHTML('beforeend', 
      `<div class="font-bold my-8 text-xl text-green-300">
      ${quote}
      </div>
    `)
  }

// (1) when the page loads, 
// (2) loop through the quotes 
// (3) and append each to the page

function pageLoaded() {
  for(let i=0; i<quotes.length; i++) {
    let quote = quotes[i]
    appendQuote(quote)
  }
}

window.addEventListener('DOMContentLoaded', pageLoaded) 