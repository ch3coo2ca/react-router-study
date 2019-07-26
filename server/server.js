const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "..", "public/")));

app.get("/api/getData", (req, res) => {
  res.send({ data: "test data " });
});

app.listen(PORT, () => {
  console.log("check out the app at : http://localhost:" + PORT);
});
