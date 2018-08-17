app.controller('listaFeedCtrl', function ($scope, Util, $rootScope, servicoFeed, $location) {
    $scope.data = {}
    $rootScope.feeds = [];
    $rootScope.posts = [];

    $scope.init = function () {
        var feedsAux = Util.obterObjeto('Feeds');
        var postsAux = Util.obterObjeto('Posts');

        if (feedsAux != '') {
            $rootScope.feed = Util.converterParaObjeto(feedsAux);
        }
        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }
    }

    $scope.excluir = function(index){
        $rootScope.feeds.splice(index, 1);
        Util.salvarObjeto('Feeds', $rootScope.feeds)
    }

    $scope.obterListaPosts = function(guid, name){
        $rootScope.feedAtual = name;
        $rootScope.guidAtual = guid;
        $rootScope.listaPosts = servicoFeed.obterListaPost(guid);

        $location.path("/listaPosts");
    }

})