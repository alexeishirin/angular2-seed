import { Component } from '@angular/core';

import {MdProgressCircle} from '@angular2-material/progress-circle';

@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives:[MdProgressCircle]
})
/**
 * This class represents the lazy loaded AboutComponent.
 */
export class AboutComponent {}
