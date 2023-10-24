const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello, I am the Bids Backend!");
});

app.get("/json", (req, res) => {
  res.json({
    pepe: "soy tontito",
    anotherKey: "antonio caca",
    moreData: {
      nestedKey: "nestedValue",
      arrayKey: [1, 2, 3],
    },
  });
});

app.get("/pepe", (req, res) => {
  res.send("pepe");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
