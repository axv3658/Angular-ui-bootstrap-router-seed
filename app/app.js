(function() {
  'use strict';

  angular.module('myApp',
    [
		'ui.router',
		'ui.bootstrap',
		'myApp.routes',
		'myApp.view1',
		'myApp.view2'
    ]);
})();
