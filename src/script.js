module.exports = news; 
// Move the declaration outside of the block scope
const News = document.querySelector('.latest-news');
for (let i = 0; i <news.length; i++) {
    const cardNews = document.createElement('div');
    cardNews.classList.add('card-news');
    cardNews.innerHTML = `
    <div class="card-news__img">
        <img src="${news[i].img}" alt="${news[i].title}">
    </div>
    <div class="card-news__content">
        <h3 class="card-news__title">${news[i].title}</h3>
        <p class="card-news__text">${news[i].text}</p>
        <a href="#" class="card-news__link">Read more</a>
    </div>
    `;
    latestNews.appendChild(cardNews);
}

// Fetch data from the API
fetch('https://4e4868ae-2442-41c9-a453-7ee36ab7012d.mock.pstmn.io/api/get_finance_news')
    .then(response => response.json())
    .then(news => {
        const latestNews = document.querySelector('.latest-news');
        for (let i = 0; i < news.length; i++) {
            const cardNews = document.createElement('div');
            cardNews.classList.add('card-news');
            cardNews.innerHTML = `
            <div class="card-news__img">
                <img src="${news[i].img}" alt="${news[i].title}">
            </div>
            <div class="card-news__content">
                <h3 class="card-news__title">${news[i].title}</h3>
                <p class="card-news__text">${news[i].text}</p>
                <a href="#" class="card-news__link">Read more</a>
            </div>
            `;
            latestNews.appendChild(cardNews);
        }
    })
    


