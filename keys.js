const request = require("request");

const host = process.argv[2];

const options = {
  url: "http://" + host + ":3223",
  method: "GET"
}

request(options, (err, response, body) => {
  const array = JSON.parse(body);
  for (let id of array) {
    console.log(id);
  }
});
