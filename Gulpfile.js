var gulp = require('gulp'),
    //Js
    babel = require('gulp-babel');
filesJs = './sd_files/js/main.js',
    outputJs = './dist/js/',
    concat = require('gulp-concat');
//Sass
sass = require('gulp-sass')(require('sass')),
    filesCss = './sd_files/css/main.sass',
    filesSASS = './sd_files/css/**/*.sass',
    outputCss = './dist/css';



// =====================================================
//Javascript
gulp.task('jsBabel', function() {
    gulp.src(filesJs)
        .pipe(babel({
            "presets": [
                ["@babel/preset-env", { "modules": false }]
            ]
        }))
        .pipe(gulp.dest(outputJs));
});
const { watch } = require('gulp');
const watcherJS = watch([filesJs]);


gulp.task('watchJS', function() {
    watcherJS.on('change', function(path, stats) {
        console.log(`File ${path} was changed`);
        return gulp.watch(filesJs, gulp.series('jsBabel'));
    });
});
// =====================================================
//Sass
gulp.task('sass', function() {
    return gulp.src(filesCss)
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest(outputCss));
});
gulp.task('watchSass', function(path, stats) {
    return gulp.watch(filesSASS, gulp.parallel('sass'));
});



//Run/Watch
gulp.task('default', gulp.parallel('jsBabel', 'sass', 'watchJS', 'watchSass'));