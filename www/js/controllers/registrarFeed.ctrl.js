app.controller('registrarFeedCtrl', function ($scope, Util, servicoFeed, $rootScope, $location) {
    $scope.data = {}
    $rootScope.feed = [];

    $scope.init = function () {
        var feedAux = Util.obterObjeto('Feed');

        if (feedAux != '') {
            $rootScope.feed = Util.converterParaObjeto(feedAux);
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