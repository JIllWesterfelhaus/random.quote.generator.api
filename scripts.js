const colorRandomizer = () => {
const myColors = ['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f1c40f']
const randomNum=
Math.floor((Math.random()*myColors.length));

const randomColor=myColors[randomNum];
const bg=document.querySelector('.randomBGColor')
bg.setAttribute('style', 'background-color: ${randomColor}');

const textElements=document.querySelectorAll('randomTxtColor');
for(const text of textElements) {
    text.setAttribute('style', `color: ${randomColor}`)
}
}

//The response from our JSONP request will contain the JSON response from the API and a callback function to which we can pass any argument we want.

//This type of request can be convenient but it also poses issues when the API server get's compromised as it may lead to malicious code being injected in your page so be careful and use it only for trivial projects such as this one.//

const getQuote = (data) => {
// 1) here we are creating the callback function that we will pass to the JSONP request//
const callbackName = 'displayQuote'
window[callbackName] = function(data) {
delete window[callbackName]
documents.body.removeChild(script)
callbackName(data)   
}

// 2) we are injecting the script tag into our HTML
const script = document.createElement('script')
script.src =
url + (url.indexOf('?') >= 0 ? '&' : '?') +
'callback=' + callbackName
document.body.appendChild(script)
}

const displayQuote = (data) => {
    const currentQuote = data.quoteText;
    const currentAuthor = data.quoteAuthor;
    //add them to my html
    const text = document.querySelector('#quoteText')
    text.innerHTML = currentQuote
    const author = document.querySelector('#quoteAuthor')
    author.innerHTML = `- ${currentAuthor}`;
    const twitter =  document.querySelector('#twitter-share-button');
    twitter.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes,Fcc&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor))
  }

  document.querySelector('#new-quote').addEventListener('click', 
  () => {
      getQuote(displayQuote);
  })

  documents.addEventListener('DOMContentLoaded', () => {
      getQuote(displayQuote);
  }
  
  