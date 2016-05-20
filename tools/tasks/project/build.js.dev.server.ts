import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';

import { join } from 'path';

import { APP_DEST, APP_SRC, SERVER_DEST, SERVER_SRC, TOOLS_DIR } from '../../config';
import { makeTsProject, templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, transpiling the TypeScript files (except the spec
 * and e2e-spec files) for the development environment.
 */
export = () => {
  let tsProject = plugins.typescript.createProject(SERVER_SRC + '/tsconfig.json');

  return gulp.src(SERVER_SRC + '/**/*.ts')
    .pipe(plugins.typescript(tsProject))
    .js
    .pipe(gulp.dest(SERVER_DEST));
  
};
