"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var ng2_material_1 = require('ng2-material');
var toolbar_1 = require('@angular2-material/toolbar');
var HomeComponent = (function () {
    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService the injected NameListService
     */
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.materials = [
            { '_id': "1", 'name': 'Acrylic (Transparent)', 'quantity': 25, 'price': 2.90 },
            { '_id': "2", 'name': 'Plywood (Birch)', 'quantity': 50, 'price': 1.25 },
            { '_id': "3", 'name': 'Laminate (Gold on Blue)', 'quantity': 10, 'price': 2.35 }
        ];
    }
    HomeComponent.prototype.change = function (data) {
        var names = [];
        this.materials.forEach(function (mat) {
            if (data.values.indexOf(mat.id) !== -1) {
                names.push(mat.name);
            }
        });
        this.selection = names.join(', ');
        this.count = names.length;
    };
    /**
     * Calls the add method of the NameListService with the current
     * newName value of the form.
     * @return {boolean} false to prevent default form submit behavior to refresh the page.
     */
    HomeComponent.prototype.addName = function () {
        this.nameListService.add(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [common_1.FORM_DIRECTIVES, ng2_material_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar]
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map