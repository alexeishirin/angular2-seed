import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as browserSync from 'browser-sync';

const plugins = <any>gulpLoadPlugins();

var BROWSER_SYNC_RELOAD_DELAY = 500;

export = (cb:any) => {
  var called = false;
  return plugins.nodemon({
    script: './dist/server/dev/server.js'
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) {
        cb();
      }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload();
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
}
