import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

import { NameListService } from '../shared/index';
import {MATERIAL_DIRECTIVES, ITableSelectionChange} from 'ng2-material';
import {MdToolbar} from '@angular2-material/toolbar';
import {Material} from "../../../models/material.model";

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [FORM_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar]
})
/**
 * This class represents the lazy loaded HomeComponent.
 */
export class HomeComponent {

  newName: string;
  selection: string;
  count: number;
  materials: Array<Material> = [
    {'_id': "1", 'name': 'Acrylic (Topt)', 'quantity': 25, 'price': 2.90},
    {'_id': "2", 'name': 'Plywood (Birch)', 'quantity': 50, 'price': 1.25},
    {'_id': "3", 'name': 'Laminate (Gold on Blue)', 'quantity': 10, 'price': 2.35}
  ];
  change(data: ITableSelectionChange) {
    let names : Array<string> = [];
    this.materials.forEach((mat: Material) => {
      if (data.values.indexOf(mat._id) !== -1) {
        names.push(mat.name);
      }
    });
    this.selection = names.join(', ');
    this.count = names.length;
  }

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService the injected NameListService
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Calls the add method of the NameListService with the current
   * newName value of the form.
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

}
