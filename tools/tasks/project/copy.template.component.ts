import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { argv } from 'yargs';

import { APP_SRC } from '../../config';

const NAME = argv['name'].toLowerCase();
const CAPITALIZED_NAME = NAME.charAt(0).toUpperCase() + NAME.slice(1);

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src('templates/+component/**')
    .pipe(plugins.replace('{{name}}', NAME))
    .pipe(plugins.replace('{{nameUpperCase}}', CAPITALIZED_NAME))
    .pipe(gulp.dest(APP_SRC + "/app/+" + NAME));
};
