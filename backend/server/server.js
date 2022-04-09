import express from "express";
const app = express();
const port = 8080;

app.use(express.json());
app.post("/v1/update", (req, res) => {
  setTimeout(() => {
    res.send(200).json(req.body);
  }, 2000);
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port} `);
});
