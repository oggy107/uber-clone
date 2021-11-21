const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const scssTask = () => {
    return gulp.src('./app/styles/scss/**/*.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/styles', { sourcemaps: '.'}))
}

const watchTask = () => {
    gulp.watch('./app/styles/scss/**/*.scss', scssTask)
}

exports.default = gulp.series([scssTask, watchTask])
exports.scssTask = scssTask
exports.watchTask = watchTask