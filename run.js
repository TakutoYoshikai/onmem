const express = require("express");
const app = express();

let mem = {};

app.post("/:id", (req, res) => {
  const id = req.params.id;
  mem[id] = Buffer.alloc(0);
  req.on("data", (data, err) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "NG" });
      return;
    }
    mem[id] = Buffer.concat([mem[id], data]);
  });
  req.on("end", () => {
    res.status(200).send({ message: "OK" });
  });
});

app.get("/", (req, res) => {
  const keys = Object.keys(mem);
  res.status(200).send(keys);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(mem[id]);
});

app.listen(3223);
