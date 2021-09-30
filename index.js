"use strict";

const fs = require("fs/promises");

fs.mkdir("./tmp")
  .then((err) => {
    console.log("succes");
  })
  .catch(console.log("error"));

fs.writeFile("./tmp/file.txt", "Hello From NodeJS").then((err) => {
  console.log("succes");
});

fs.readFile("./tmp/file.txt", "utf-8").then((file) => {
  console.log(file);
});
