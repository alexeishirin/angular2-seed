import { Component } from '@angular/core';
import { MdSpinner } from '@angular2-material/progress-circle'

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [MdSpinner]
})
export class AboutComponent {}
