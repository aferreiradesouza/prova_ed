app.controller('visualizarPostCtrl', function ($scope, Util, $rootScope, servicoFeed, $location) {
    $rootScope.posts = [];

    $scope.init = function () {
        var postsAux = Util.obterObjeto('Posts');

        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }
    }

    $scope.alterarLido = function(obj){
        servicoFeed.marcarLido(obj);
    }
})