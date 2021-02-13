const request = require("request");

const input = require("fs").readFileSync("/dev/stdin");

const id = process.argv[2];

const options = {
  url: "http://localhost:3223/" + id,
  method: "POST",
  body: input
}
request(options, (err, response, body) => {
  if (err) {
    console.error(err);
  }
});
