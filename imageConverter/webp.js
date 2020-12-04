
const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
 

imagemin(["./../assets/img/app/screenshots/de-DE/250x/*.{jpg,png}"], {
  destination: "./../assets/img/app/screenshots/de-DE/250x/",

  plugins: [
    imageminWebp({
        quality: 90
        // ,
        // resize: {
        //   width: 1000,
        //   height: 0
        // }
    }),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});
