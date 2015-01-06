var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var del = require('del');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('clean', function () {
  del(['./build/*']);
});

gulp.task('copy', function () {
  gulp.src('./client/index.html')
    .pipe(gulp.dest('build'));

  gulp.src('./client/img/*')
    .pipe(gulp.dest('build/img'));

  gulp.src('./bower_components/foundation-apps/iconic/*')
    .pipe(gulp.dest('build/img/iconic'));
});

gulp.task('sass', function () {
  return  gulp.src(['./client/scss/**/*.{scss,sass}'])
              .pipe(sass({ loadPath : ['bower_components', 'node_modules'],}))
               .on('error', function (err) { console.log(err.message); })
              .pipe(gulp.dest('./build/css'));
});

gulp.task('server', function (callback) {
  var myConfig = require('./webpack.config.js');
  
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true,
    debug: true
  }).listen(8000, 'localhost', function (err, result) {
    
  });
});

gulp.task('watch', ['copy', 'sass'], function () {
  gulp.watch(['./client/**/*{scss,sass}'], ['sass']);
  gulp.watch(['./client/index.html'], ['copy']);
});

gulp.task('default', ['server', 'watch'], function () {

});