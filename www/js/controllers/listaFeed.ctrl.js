app.controller('listaFeedCtrl', function ($scope, Util, $rootScope, servicoFeed, $location) {
    $scope.data = {}
    $rootScope.feeds = [];
    $rootScope.posts = [];


    //Obtem listas
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

    //exclui o feed
    $scope.excluir = function(index){
        $rootScope.feeds.splice(index, 1);
        Util.salvarObjeto('Feeds', $rootScope.feeds)
    }

    //salva o guid e o name do feed selecionado, laem de chamar o servico de obterlistaPost
    $scope.obterListaPosts = function(guid, name){
        $rootScope.feedAtual = name;
        $rootScope.guidAtual = guid;
        $rootScope.listaPosts = servicoFeed.obterListaPost(guid);

        $location.path("/listaPosts");
    }

})