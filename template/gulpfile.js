const gulp = require("gulp");
const favicons = require("gulp-favicons");
const log = require("fancy-log");

gulp.task("favicon", function () {
  return gulp.src("src/logo.png").pipe(favicons({
    appName: "Webpack encore standalone",
    appDescription: "Webpack encore standalone",
    developerName: "disjfa",
    developerURL: "http://disjfa.nl/",
    background: "#171717",
    theme_color: "#000",
    path: "/icon/",
    url: "https://disjfa.github.io/fluent-bootstrap/",
    display: "standalone",
    orientation: "portrait",
    start_url: "/?homescreen=1",
    version: 1.0,
    logging: false,
    online: false,
    html: "index.html",
    pipeHTML: true,
    replace: true,
  }))
    .on("error", log)
    .pipe(gulp.dest("./public/icon"));
});
