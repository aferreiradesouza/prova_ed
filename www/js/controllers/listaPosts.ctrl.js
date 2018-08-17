app.controller('listaPostsCtrl', function ($scope, Util, $rootScope, servicoFeed, $location) {
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

        $rootScope.listaPosts = servicoFeed.obterListaPost($rootScope.guidAtual);
    }

    $scope.verPost = function(obj){
        $rootScope.postagem = obj;
        $location.path('/visualizarPost');
    }
    
})