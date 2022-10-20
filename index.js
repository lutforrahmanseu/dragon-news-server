const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.get("/", (req, res) => {
  res.send("News API Running");
});
app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const categoryNews = news.filter((category) => category.category_id === id);
    res.send(categoryNews);
  }
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((p) => p._id === id);
  res.send(selectedNews);
  //   console.log(req.params.id);
});
app.listen(port, () => {
  console.log("Dragon news server running 5000");
});
