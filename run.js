const express = require("express");
const app = express();

let mem = null;

app.post("/", (req, res) => {
  mem = Buffer.alloc(0);
  req.on("data", (data, err) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "NG" });
      return;
    }
    mem = Buffer.concat([mem, data]);
  });
  req.on("end", () => {
    res.status(200).send({ message: "OK" });
  });
});

app.get("/", (req, res) => {
  res.status(200).send(mem);
});

app.listen(3000);
