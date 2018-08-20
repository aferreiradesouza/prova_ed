app.controller('listaPostsCtrl', function ($scope, Util, $rootScope, servicoFeed, $state, $stateParams) {
    
    $scope.init = function () {
        $scope.posts = servicoFeed.obterListaPost($stateParams.guid);
        var listaFeeds = servicoFeed.obterListaFeed();

        listaFeeds.forEach(item => {
            if($stateParams.guid == item.guid){
                $scope.feedAtual = item.name;
            }
        });
    }

    $scope.verPost = function (guid) {
        $state.go("visualizarPost", { guid: $stateParams.guid, guidPost: guid });
    }

    $scope.voltar = function () {
        $state.go("listaFeed");
    }

})