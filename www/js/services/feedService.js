app.service('servicoFeed', function(Util, $rootScope) {
    return {
        registrarFeed : registrarFeed,
        validarFeed : validarFeed,
        obterListaPost : obterListaPost,
        criarPost : criarPost
    }

    function validarFeed(feed){
        var resposta = {};

        $rootScope.feed = [];
        var feedAux = Util.obterObjeto('Feed');
        if (feedAux != '') {
            $rootScope.feed = Util.converterParaObjeto(feedAux);
        }
        resposta.resultado = true;

        $rootScope.feed.forEach(item => {
            if(feed.nome == item.nome || feed.url == item.url){
                resposta.resultado = false;

                if(feed.nome == item.nome){
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
        $rootScope.feed = [];
        var feedAux = Util.obterObjeto('Feed');
        if (feedAux != '') {
            $rootScope.feed = Util.converterParaObjeto(feedAux);
        }
        $rootScope.feed.push(feed);
        Util.salvarObjeto('Feed', $rootScope.feed);
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

})