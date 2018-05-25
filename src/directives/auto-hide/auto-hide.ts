import { Directive } from '@angular/core';

/**
 * Generated class for the AutoHideDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[auto-hide]' // Attribute selector
})
export class AutoHideDirective {

  constructor() {
    console.log('Hello AutoHideDirective Directive');
  }

}
