app.controller('registrarFeedCtrl', function ($scope, Util, servicoFeed, $rootScope, $location) {
    $scope.data = {}
    $rootScope.feeds = [];

    //Obtem listas
    $scope.init = function () {
        var feedsAux = Util.obterObjeto('Feeds');

        if (feedsAux != '') {
            $rootScope.feeds = Util.converterParaObjeto(feedsAux);
        }
    }

    //registra o feed
    $scope.registrar = function(){
        $scope.error = servicoFeed.validarFeed($scope.data);

        //se tiver erro, ele retorna um objeto com todos os erros dentro, alem de um boolean
        if($scope.error.resultado){
            $scope.data.guid = Util.criarGuid();
            servicoFeed.registrarFeed($scope.data);
            $location.path("/listaFeed");
        }
    }

})