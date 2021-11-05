#!/usr/bin/env node
const request = require("request");

const input = require("fs").readFileSync("/dev/stdin");

const id = process.argv[2];
let host = "localhost";
if (process.argv.length >= 4) {
  host = process.argv[3];
}

const options = {
  url: "http://" + host + ":3223/" + id,
  method: "POST",
  body: input
}
request(options, (err, response, body) => {
  if (err) {
    console.error(err);
  }
});
