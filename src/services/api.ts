const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ea0dbee37adf4a07a4c38b376d73c277`

export default function getNews() {
    return fetch(`${url}`).then((response) => response.json().catch((err) => {console.log(err)}))
}
