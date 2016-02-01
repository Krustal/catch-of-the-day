var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var notify = require('gulp-notify');

var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var serverConfig = require('./server.config.js');


/*
  Styles Task
*/

gulp.task('styles',function() {
  // move over fonts

  gulp.src('css/fonts/**.*')
    .pipe(gulp.dest('build/css/fonts'))

  // Compiles CSS
  gulp.src('css/style.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream:true}))
});

/*
  Images
*/
gulp.task('images',function(){
  gulp.src('css/images/**')
    .pipe(gulp.dest('./build/css/images'))
});

/*
  Browser Sync
*/
gulp.task('browser-sync', function() {
    browserSync(serverConfig);
});

// TODO: This is not currently working correctly. It builds but then hangs on
// finish. Not blocking so I'm continuing but should be fixed at some point.
gulp.task('scripts', function(callback) {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback()
  });
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['images','styles', 'browser-sync'], function() {
  gulp.watch('css/**/*', ['styles']); // gulp watch for stylus changes
});
