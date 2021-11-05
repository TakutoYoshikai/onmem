#!/usr/bin/env node

const express = require("express");
const app = express();

let mem = {};

app.post("/:path*", (req, res) => {
  const path = req.path.substring(1);
  let buf = Buffer.alloc(0);
  req.on("data", (data, err) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "NG" });
      return;
    }
    buf = Buffer.concat([buf, data]);
  });
  req.on("end", () => {
    mem[path] = buf;
    res.status(200).send({ message: "OK" });
  });
});

app.get("/", (req, res) => {
  const keys = Object.keys(mem);
  res.status(200).send(keys);
});

app.get("/:path*", (req, res) => {
  const path = req.path.substring(1);
  res.status(200).send(mem[path]);
});

if (process.argv.length >= 3 && process.argv[2] === "public") {
  app.listen(3223);
  return;
}
app.listen(3223, "127.0.0.1");
