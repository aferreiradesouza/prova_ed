app.controller('registrarFeedCtrl', function ($scope, Util, servicoFeed, $rootScope, $location) {
    $scope.data = {}
    $rootScope.feeds = [];

    $scope.init = function () {
        var feedsAux = Util.obterObjeto('Feeds');

        if (feedsAux != '') {
            $rootScope.feeds = Util.converterParaObjeto(feedsAux);
        }
    }

    $scope.registrar = function(){
        $scope.error = servicoFeed.validarFeed($scope.data);
        console.log($scope.error);

        if($scope.error.resultado){
            $scope.data.guid = Util.criarGuid();
            servicoFeed.registrarFeed($scope.data);
            $location.path("/listaFeed");
        }
    }

})