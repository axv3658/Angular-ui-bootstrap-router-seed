(function () {
    angular.module('myApp.routes', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/view1');

            $stateProvider
                .state('view1', {
                    url: '/',
                    templateUrl: 'components/view1/view1.html',
                     controller: 'View1Ctrl',
                })

                .state('view2', {
                    url: '/view2',
                    templateUrl: 'components/view2/view2.html',
                    controller: 'View2Ctrl',
                })
        }]);
})();
