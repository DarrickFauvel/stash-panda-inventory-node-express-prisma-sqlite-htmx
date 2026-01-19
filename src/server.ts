import express from "express";

const PORT = 3000;

const app = express();

app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
