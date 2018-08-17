app.controller('listaFeedCtrl', function ($scope, Util, $rootScope, servicoFeed, $location) {
    $scope.data = {}
    $rootScope.feed = [];
    $rootScope.posts = [];

    $scope.init = function () {
        var feedAux = Util.obterObjeto('Feed');
        var postsAux = Util.obterObjeto('Posts');

        if (feedAux != '') {
            $rootScope.feed = Util.converterParaObjeto(feedAux);
        }
        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }
    }

    $scope.excluir = function(index){
        $rootScope.feed.splice(index, 1);
        Util.salvarObjeto('Feed', $rootScope.feed)
    }

    $scope.obterListaPosts = function(guid){
        $rootScope.guidAtual = guid;
        $rootScope.listaPosts = servicoFeed.obterListaPost(guid);

        $location.path("/listaPosts");
    }

})