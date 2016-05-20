import * as gulp from 'gulp';
import * as browserSync from 'browser-sync';

import { APP_SRC, TEMP_FILES } from '../../config';

export = () => {
  return gulp.watch(APP_SRC + '/**', ['build.dev', browserSync.reload]);
}
