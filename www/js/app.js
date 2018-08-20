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
      url: '/feeds',
      templateUrl: 'views/listaFeed.html',
      controller: 'listaFeedCtrl',
      cache: false
    })

      .state('registrarFeed', {
        url: '/registrarFeed',
        templateUrl: 'views/registrarFeed.html',
        controller: 'registrarFeedCtrl',
        cache: false
      })

      .state('listaPosts', {
        url: '/feeds/:guid/posts',
        templateUrl: 'views/listaPosts.html',
        controller: 'listaPostsCtrl',
        cache: false
      })

      .state('registrarPost', {
        url: '/registrarPost',
        templateUrl: 'views/registrarPost.html',
        controller: 'registrarPostCtrl',
        cache: false
      })

      .state('visualizarPost', {
        url: '/feeds/:guid/posts/:guidPost',
        templateUrl: 'views/visualizarPost.html',
        controller: 'visualizarPostCtrl',
        cache: false
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('feeds');

  });
