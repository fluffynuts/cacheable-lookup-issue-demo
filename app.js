var app = require("express")();
var got = require("got");
var http = require("http");

app.get('/user', (req, res) => {
  res.send({
    id: 1,
    name: "Han",
    likes: "to shoot first"
  });
});

app.get("/fails", (req, res) => {
  got("http://server.dev.local:10080/user")
    .then(result => res.send(result.body))
    .catch(err => {
      res.status(500);
      res.send(err);
    });
});

app.get("/by-ip", (req, res) => {
  got("http://127.0.0.1:10080/user")
    .then(result => res.send(result.body))
    .catch(err => {
      res.status(500);
      res.send(err);
    });
});

app.get("/by-http", (req, res) => {
  http.get("http://server.dev.local:10080/user", r => {
    let data = "";
    r.on("data", d => data += d.toString());
    r.on("end", () => res.send(data));
  });
});

var server = app.listen(10080, () => {
  const address = server.address();
  console.log(`listening on ${address.address}:${address.port}`);
});
