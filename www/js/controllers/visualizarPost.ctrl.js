app.controller('visualizarPostCtrl', function ($scope, Util, $rootScope, servicoFeed, $state, $stateParams) {
    $scope.post = {};

    $scope.init = function () {
        var listaPosts = servicoFeed.obterListaPost($stateParams.guid);
        listaPosts.forEach(item => {
            if($stateParams.guidPost == item.guid){
                $scope.post = item;
            }
        });
    }

    //chama o servico que altera para true ou false o boolean read
    $scope.alterarLido = function(obj){
        servicoFeed.marcarLido(obj);
    }

    $scope.voltar = function(){
        $state.go("listaPosts",{guid:$stateParams.guid});
    }

})