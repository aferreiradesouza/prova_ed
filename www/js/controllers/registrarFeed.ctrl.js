app.controller('registrarFeedCtrl', function ($scope, Util, servicoFeed, $rootScope, $state, $ionicHistory) {
    $scope.data = {}

    $scope.init = function () {
        
    }

    $scope.registrar = function () {
        $scope.error = servicoFeed.validarFeed($scope.data);

        //se tiver erro, ele retorna um objeto com todos os erros dentro, alem de um boolean
        if ($scope.error.resultado) {
            $scope.data.guid = Util.criarGuid();
            servicoFeed.registrarFeed($scope.data);
            $state.go("listaFeed");
        }
    }

})