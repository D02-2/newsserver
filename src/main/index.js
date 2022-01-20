import fetch from 'node-fetch';
import express from 'express';

const app = express()
const port = process.env.PORT || 80;

app.get('/news/:mode', async (req, res) => {
    const mode = req.params.mode;
    const articles = await fetchData(mode);
  res.send(articles)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


function fetchData(apiParam) {
    let newsApi =
    "https://newsapi.org/v2/top-headlines?country=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788";

  switch (apiParam) {
    case "de":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      break;

    case "general":
      newsApi =
        "https://newsapi.org/v2/top-headlines?category=general&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      break;

    case "p":
      let searchTextNotEmpty = `''`;
      if (searchText !== "") {
        searchTextNotEmpty = searchText;
      }
      newsApi = `https://newsapi.org/v2/everything?q=${searchTextNotEmpty}&language=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788`;
      break;

    case "business":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      break;

    case "science":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      break;

    case "technology":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      break;

    case "entertainment":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      break;

    case "sports":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      break;

    case "health":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=1ac2aebda1c64e04a5bd4828db18f788";;
      break;

    default:
      break;
  }

  return fetch(newsApi)
      .then((res) => res.json())
      .then((res) => {
        return res.articles;
      })
      .catch(() => {
        console.log("Error!!!");
      });
}