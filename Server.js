const express = require("express");

const app = express();

const port = 5001;

app.use(express.json());
app.use(express.static("public"));

const day = new Date().getDay();
const hours = new Date().getHours();

const curentdate = (req, res, next) => {
  if (day == 0 || day == 6 || hours < 9 || hours > 17) {
    return res.send("<h1>OUT OF WORKING</h1>");
  }
  next();
};
app.use(curentdate);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/Home.html");
});

app.get("/Contact", (req, res) => {
  res.sendFile(__dirname + "/public/contactus.html");
});

app.get("/Services", (req, res) => {
  res.sendFile(__dirname + "/public/ourservices.html");
});
app.get("/navbar.css", (req, res) => {
  res.sendFile(__dirname + "/public/navbar.css");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
