const express = require("express");
const logger = require("./public/midellweare/logger");

const app = express();
app.use(logger)

app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public");

const port = 4000;
app.listen(port, (err) =>
err ? console.error(err) : console.log(`app listing on port: ${port}`)
);
