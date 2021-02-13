const request = require("request");

const input = require("fs").readFileSync("/dev/stdin");

const options = {
  url: "http://localhost:3000/",
  method: "POST",
  body: input
}
request(options, (err, response, body) => {
  if (err) {
    console.error(err);
  }
});
