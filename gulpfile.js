const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const components = require('./build/components.json');

function buildCss(cb) {
    gulp.src('./styles/index.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(rename('index.css'))
        .pipe(gulp.dest('./lib/styles'));
    cb()
}

function buildSeperateCss(cb) {
    Object.keys(components).forEach(compName => {
        gulp.src(`./styles/${compName}.scss`)
            .pipe(sass())
            .pipe(postcss([autoprefixer()]))
            .pipe(cleanCSS())
            .pipe(rename(`${compName}.css`))
            .pipe(gulp.dest('./lib/styles'));
    })

    cb()
}

exports.default = gulp.series(buildCss);