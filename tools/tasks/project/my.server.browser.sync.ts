import * as browserSync from 'browser-sync';

export = () => {
  return browserSync({
    proxy: "localhost:8080",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true
  });
}
