import express from "express";

const PORT = 3000;

const app = express();

app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/hello", (req, res) => {
  res.send("Hello from server!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
