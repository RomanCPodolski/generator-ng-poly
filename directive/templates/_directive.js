'use strict';

angular.module('<% if (parentModuleName) { %><%= parentModuleName %>.<% } %><%= moduleName %>').directive('<%= lowerCamel %>', function () {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: '<%= modulePath %>/<%= lowerCamel %>Directive.html', 
    replace: false,
    link: function (scope, element, attrs) {
      element.text('<%= lowerCamel %>\n' + scope + '\n' + attrs);
    }
  };
});