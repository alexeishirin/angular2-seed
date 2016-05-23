
import { join } from 'path';

import {SeedConfig, ENVIRONMENTS} from './seed.config';
import { InjectableDependency } from './seed.config.interfaces';
const proxy = require('proxy-middleware');

/**
 * This class extends the basic seed configuration, allowing for project
 * specific overrides. A few examples can be found below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  PROD_DEST_ROOT = `${this.DIST_DIR}/prod`;

  constructor() {
    super();

    this.BROWSER_SYNC_CONFIG = {
      port: this.PORT,
      startPath: this.APP_BASE,
      server: {
        baseDir: `${this.DIST_DIR}/empty/`,
        middleware: [
          proxy({
            protocol: 'http:',
            hostname: 'localhost',
            port: 8080,
            pathname: '/api',
            route: '/api'
          }),
          require('connect-history-api-fallback')({index: `${this.APP_BASE}index.html`})
        ],
        routes: {
          [`${this.APP_BASE}${this.APP_DEST}`]: this.APP_DEST,
          [`${this.APP_BASE}node_modules`]: 'node_modules',
          [`${this.APP_BASE.replace(/\/$/,'')}`]: this.APP_DEST
        }
      }
    };

    // this.APP_TITLE = 'Put name of your app here';
    let additional_deps: InjectableDependency[] = [
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);

    this.CSS_PROD_BUNDLE = 'main.css';

    this.APP_ASSETS = [
      //...
      { src: `${this.CSS_SRC}/main.scss`, inject: true, vendor: false }, // renamed SASS file
    ];
  }
}
