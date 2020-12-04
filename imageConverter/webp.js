
const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
 

imagemin(["./../assets/img/app/screenshots/de-DE/*.{jpg,png}"], {
  destination: "./../assets/img/app/screenshots/de-DE/",
  cwd: true,
  plugins: [
    imageminWebp({
        quality: 90
        ,
        resize: {
          width: 1000,
          height: 0
        }
    }),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});


imagemin(["./../assets/img/app/screenshots/de-DE/*.{jpg,png}"], {
  destination: "./../assets/img/app/screenshots/de-DE/",
  cwd: true,
  plugins: [
    imageminWebp({
      //   quality: 90
      //   ,
      //   resize: {
      //     width: 1000,
      //     height: 0
      //   }
    }),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});
