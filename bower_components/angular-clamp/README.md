## Angular Clamp

### Installation

To add angular-clamp to your project, first [install Bower](http://bower.io/#install-bower) and run :
```
bower install angular-clamp
```
Add `--save` to add it in your `bower.json`.

Finally, inject `'directives.clamp'` into your module.

### Examples

```html
<div clamp="3" ng-bind="text"></div>
```

The number 3 here means that the number of lines will be displayed
