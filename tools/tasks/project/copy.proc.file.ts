import * as gulp from 'gulp';

import { PROD_DEST_ROOT } from '../../config';

export = () => {
  return gulp.src('ProcFile')
    .pipe(gulp.dest(PROD_DEST_ROOT));
};
