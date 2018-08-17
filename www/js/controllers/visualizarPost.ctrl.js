app.controller('visualizarPostCtrl', function ($scope, Util, $rootScope, servicoFeed, $location) {
    $rootScope.posts = [];

    //Obtem listas
    $scope.init = function () {
        var postsAux = Util.obterObjeto('Posts');

        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }
    }

    //chama o servico que altera para true ou false o boolean read
    $scope.alterarLido = function(obj){
        servicoFeed.marcarLido(obj);
    }
})