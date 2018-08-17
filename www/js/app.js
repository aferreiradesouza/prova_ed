var app = angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
    $stateProvider.state('listaFeed', {
      url: '/listaFeed',
      templateUrl: 'views/listaFeed.html',
      controller: 'listaFeedCtrl'
    })

    .state('registrarFeed', {
      url: '/registrarFeed',
      templateUrl: 'views/registrarFeed.html',
      controller: 'registrarFeedCtrl'
    })

    .state('listaPosts', {
      url: '/listaPosts',
      templateUrl: 'views/listaPosts.html',
      controller: 'listaPostsCtrl'
    })

    .state('registrarPost', {
      url: '/registrarPost',
      templateUrl: 'views/registrarPost.html',
      controller: 'registrarPostCtrl'
    })

    .state('visualizarPost', {
      url: '/visualizarPost',
      templateUrl: 'views/visualizarPost.html',
      controller: 'visualizarPostCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('listaFeed');

  });
