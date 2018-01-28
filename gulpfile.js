const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const nodemon = require('gulp-nodemon');

gulp.task('sass:dev', () => gulp.src('./client/*.scss').pipe(sass()).pipe(gulp.dest('./client')));
gulp.task('sass:prod', () => gulp.src('./client/*.scss').pipe(sass()).pipe(cleanCSS({ compatibility: 'ie8' })).pipe(gulp.dest('./client')));

gulp.task('start', () => {
  nodemon({
    script: 'server/index.js',
    ext: 'js html scss',
    tasks: ['sass:dev'],
    env: { NODE_ENV: 'development', PORT: 1337 },
  });
});

