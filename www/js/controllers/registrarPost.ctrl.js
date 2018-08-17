app.controller('registrarPostCtrl', function ($scope, Util, $rootScope, servicoFeed, $location) {
    $scope.data = {}
    $rootScope.posts = [];

    $scope.init = function () {
        var postsAux = Util.obterObjeto('Posts');

        if (postsAux != '') {
            $rootScope.post = Util.converterParaObjeto(postsAux);
        }
    }

    $scope.criar = function(){
        $scope.data.guid = $rootScope.guidAtual;
        servicoFeed.criarPost($scope.data);
        $location.path("/listaPosts");
    }
})