const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json');
 
gulp.task('transpile', () => {
    var tsResult = gulp.src("source/**/*.ts")
        .pipe(tsProject());
 
    return tsResult.js.pipe(gulp.dest('build'));
})

