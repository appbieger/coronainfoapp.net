var Jimp = require("jimp");
const inputFolder = './../assets/img/app/screenshots/de-DE/';
const processedFolder = './../assets/img/app/screenshots/de-DE/';
const fs = require('fs');

fs.readdir(inputFolder, (err, files) => {
  files.forEach(file => {
    if (file.toLowerCase().endsWith(".png")) {
      resizeImage(file);
    }
  });
});

function resizeImage(fileName) {
  Jimp.read(inputFolder + fileName).then(function (image) {
    image
        .resize(250, Jimp.AUTO)
        .quality(90)
        .write('./output/' + fileName);
  }).then(function () {
    console.log('moving filename', fileName);
    fs.rename('./output/' + fileName, processedFolder +  '250x/' + fileName, function (e) {
      console.log(e, fileName)
    });
  }).catch(function (e) {
    console.log(e, fileName)
  });
}