app.controller('listaFeedCtrl', function ($scope, Util, $rootScope, servicoFeed, $state, $ionicHistory) {
    $scope.data = {}
    $scope.feeds = [];

    $scope.$on('$ionicView.enter', function () {
        $ionicHistory.clearCache().then(function(){
            $state.reload();
        })
    });

    $scope.init = function () {
        $scope.feeds = servicoFeed.obterListaFeed();
    }

    $scope.excluir = function (guid) {
        servicoFeed.excluirFeed(guid);
        $scope.feeds = servicoFeed.obterListaFeed();
    }

    $scope.obterListaPosts = function (guid) {
        $state.go("listaPosts", { guid: guid });
    }

    $scope.addFeed = function () {
        $state.go("registrarFeed");
    }
})