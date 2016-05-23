import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import * as runSequence from 'run-sequence';

import { APP_SRC, TEMP_FILES } from '../../config';
import { notifyLiveReload } from '../../utils';
const plugins = <any>gulpLoadPlugins();

export = () => {
  return function () {
    let paths:string[]=[
      join('src/models','**')
    ];

    plugins.watch(paths, (e:any) =>
      runSequence('build.dev', () => notifyLiveReload(e))
    );
  };
}
