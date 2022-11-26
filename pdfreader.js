//pdf-parse
const fs = require("fs");
const pdf = require("pdf-parse");
const path = require("path");

//reading and displaying text data to from pdf to console
let dataBuffer = fs.readFileSync("hello.pdf");
pdf(dataBuffer).then(function (data) {
  console.log(data.text);
});

//checking if text matches the regex and disolaying it
let readtext = pdf(dataBuffer);
readtext.then((srch) => {
  let content = srch.text;
  let reg_string = /KRA[\w\d]*/gm;
  let result = content.match(reg_string);
  if (content) {
    console.log(result);
  } else {
    console.log(`That text does not exist in the pdf`);
  }
});
