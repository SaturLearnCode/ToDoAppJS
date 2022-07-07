let http = require("http")

let ourApp = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.end("Welcome!")
  }

  if (req.url == "/about") {
    res.end("about!")
  }

  res.end("we cannot find the page you are looking for.")
})

ourApp.listen(3000)
