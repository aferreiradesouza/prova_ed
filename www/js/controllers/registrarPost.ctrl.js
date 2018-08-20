app.controller('registrarPostCtrl', function ($scope, Util, $rootScope, servicoFeed, $state) {
    $scope.data = {}
    $rootScope.posts = [];

    //Obtem listas
    $scope.init = function () {
        var postsAux = Util.obterObjeto('Posts');

        if (postsAux != '') {
            $rootScope.post = Util.converterParaObjeto(postsAux);
        }
    }

    //registra o post alimentando o guid dele com o guid do $rootScope.guidAtual
    $scope.criar = function(){
        $scope.data.read = false;
        $scope.data.guid = $rootScope.guidAtual;
        servicoFeed.criarPost($scope.data);
        $state.go("listaFeed");
    }
})