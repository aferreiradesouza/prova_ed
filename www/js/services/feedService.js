app.service('servicoFeed', function(Util, $rootScope) {
    return {
        registrarFeed : registrarFeed,
        validarFeed : validarFeed,
        obterListaPost : obterListaPost,
        criarPost : criarPost,
        marcarLido : marcarLido
    }

    function validarFeed(feed){
        var resposta = {};

        $rootScope.feeds = [];
        var feedsAux = Util.obterObjeto('Feeds');
        if (feedsAux != '') {
            $rootScope.feeds = Util.converterParaObjeto(feedsAux);
        }
        resposta.resultado = true;

        $rootScope.feeds.forEach(item => {
            if(feed.name == item.name || feed.url == item.url){
                resposta.resultado = false;

                if(feed.name == item.name){
                    resposta.errorNome = 'Nome já existente.';
                }
                if(feed.url == item.url){
                    resposta.errorUrl = 'URL já existente.';
                }
            }
        });

        return resposta;
    }

    function registrarFeed(feed) {
        $rootScope.feeds = [];
        var feedsAux = Util.obterObjeto('Feeds');
        if (feedsAux != '') {
            $rootScope.feeds = Util.converterParaObjeto(feedsAux);
        }
        $rootScope.feeds.push(feed);
        Util.salvarObjeto('Feeds', $rootScope.feeds);
    }

    function criarPost(post){
        $rootScope.posts = [];

        var postsAux = Util.obterObjeto('Posts');
        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }

        $rootScope.posts.push(post);
        Util.salvarObjeto('Posts', $rootScope.posts);
    }

    function obterListaPost(guid){
        $rootScope.posts = [];
        var listaPosts = [];

        var postsAux = Util.obterObjeto('Posts');
        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }
        
        $rootScope.posts.forEach(item => {
            if(guid == item.guid){
                listaPosts.push(item);
            }
        });

        return listaPosts;
    }

    function marcarLido(obj){
        $rootScope.posts = [];
        var postsAux = Util.obterObjeto('Posts');
        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }

        $rootScope.posts.forEach(element => {
            if(element.title == obj.title && element.guid == obj.guid){
                element.read = !element.read;
                Util.salvarObjeto('Posts', $rootScope.posts);
            }
        });

        return;
    }

})