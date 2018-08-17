app.controller('listaPostsCtrl', function ($scope, Util, $rootScope, servicoFeed, $location) {
    $rootScope.feeds = [];
    $rootScope.posts = [];

    //Obtem listas
    $scope.init = function () {
        var feedsAux = Util.obterObjeto('Feeds');
        var postsAux = Util.obterObjeto('Posts');

        if (feedsAux != '') {
            $rootScope.feeds = Util.converterParaObjeto(feedsAux);
        }
        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }

        $rootScope.listaPosts = servicoFeed.obterListaPost($rootScope.guidAtual);
    }

    //guarda o objeto do post selecionado no $rootScope.postagem
    $scope.verPost = function(obj){
        $rootScope.postagem = obj;
        $location.path('/visualizarPost');
    }
    
})