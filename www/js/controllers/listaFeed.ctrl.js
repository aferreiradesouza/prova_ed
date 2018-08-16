app.controller('listaFeedCtrl', function ($scope, Util, $ionicPopup, $timeout) {
    $scope.data = {}
    $scope.feed = [];

    $scope.init = function () {
        var feedAux = Util.obterObjeto('itensDoFeed');

        if (feedAux != '') {
            $scope.feed = Util.converterParaObjeto(feedAux);
        }
    }


    $scope.showPopup = function () {
        var myPopup = $ionicPopup.show({
            template: '<input ng-model="data.nomeFeed" style="height: 35px; font-size: 20px;">',
            title: 'Adicionar feed',
            subTitle: 'Digite o nome do feed',
            scope: $scope,
            buttons: [
                { text: 'Cancel' },
                {
                    text: '<b>Adicionar</b>',
                    type: 'button-calm',
                    onTap: function (e) {
                        var guid = Util.criarGuid();
                        var feed = { nome: $scope.data.nomeFeed, guid: guid };
                        $scope.feed.push(feed);
                        Util.salvarObjeto('itensDoFeed', $scope.feed);
                        console.log($scope.data.nomeFeed);
                        $scope.data.nomeFeed = '';
                    }
                }
            ]
        });

    };

})