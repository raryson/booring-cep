const gulp = require('gulp')
const ts = require('gulp-typescript')
 
gulp.task('transpile', () => {
    return gulp.src('source/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
        }))
        .pipe(gulp.dest('build'))
})