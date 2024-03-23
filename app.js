const api_url = "https://api.quotable.io/quotes/random";

async function getQuote(){

    displayQuote("Loading..", "Loading..")

    const response = await fetch(api_url);
    var data = await response.json();

    displayQuote(data[0].content, data[0].author);
}

function displayQuote(content, author){
    document.querySelector('.content').textContent = content;
    document.querySelector('.author-name').textContent = author;
}

getQuote(api_url);