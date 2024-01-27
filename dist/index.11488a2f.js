module.exports = news;
const latestNews = document.querySelector(".latest-news");
for(let i = 0; i < news.length; i++){
    const cardNews = document.createElement("div");
    cardNews.classList.add("card-news");
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
fetch("https://4e4868ae-2442-41c9-a453-7ee36ab7012d.mock.pstmn.io/api/get_finance_news").then((response)=>response.json()).then((news1)=>{
    const latestNews = document.querySelector(".latest-news");
    for(let i = 0; i < news1.length; i++){
        const cardNews = document.createElement("div");
        cardNews.classList.add("card-news");
        cardNews.innerHTML = `
            <div class="card-news__img">
                <img src="${news1[i].img}" alt="${news1[i].title}">
            </div>
            <div class="card-news__content">
                <h3 class="card-news__title">${news1[i].title}</h3>
                <p class="card-news__text">${news1[i].text}</p>
                <a href="#" class="card-news__link">Read more</a>
            </div>
            `;
        latestNews.appendChild(cardNews);
    }
}).catch((error)=>console.error("Error:", error));

//# sourceMappingURL=index.11488a2f.js.map
