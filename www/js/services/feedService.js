app.service('servicoFeed', function(Util, $rootScope) {
    return {
        registrarFeed : registrarFeed,
        validarFeed : validarFeed,
        obterListaPost : obterListaPost,
        criarPost : criarPost,
        marcarLido : marcarLido
    }

    function validarFeed(feed){
        //cria o objeto que será retornado
        var resposta = {};

        //obtem a lista
        $rootScope.feeds = [];
        var feedsAux = Util.obterObjeto('Feeds');
        if (feedsAux != '') {
            $rootScope.feeds = Util.converterParaObjeto(feedsAux);
        }

        resposta.resultado = true;

        //devolve obj com o erro se tiver
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
        //obtem a lista de feeds
        $rootScope.feeds = [];
        var feedsAux = Util.obterObjeto('Feeds');
        if (feedsAux != '') {
            $rootScope.feeds = Util.converterParaObjeto(feedsAux);
        }
        //registra o feed criado
        $rootScope.feeds.push(feed);
        Util.salvarObjeto('Feeds', $rootScope.feeds);
    }

    function criarPost(post){
        //obtem a lista de posts
        $rootScope.posts = [];

        var postsAux = Util.obterObjeto('Posts');
        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }

        //registra o post criado
        $rootScope.posts.push(post);
        Util.salvarObjeto('Posts', $rootScope.posts);
    }

    function obterListaPost(guid){
        //obtem a lista de todos os posts
        $rootScope.posts = [];
        var listaPosts = [];

        var postsAux = Util.obterObjeto('Posts');
        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }
        
        //verifica qual post é daquele feed pelo guid
        $rootScope.posts.forEach(item => {
            if(guid == item.guid){
                listaPosts.push(item);
            }
        });

        return listaPosts;
    }

    function marcarLido(obj){
        //obtem a lista de posts
        $rootScope.posts = [];
        var postsAux = Util.obterObjeto('Posts');
        if (postsAux != '') {
            $rootScope.posts = Util.converterParaObjeto(postsAux);
        }

        //identifica o post e altera a propriedade read para true ou false
        $rootScope.posts.forEach(element => {
            if(element.title == obj.title && element.guid == obj.guid){
                element.read = !element.read;
                Util.salvarObjeto('Posts', $rootScope.posts);
            }
        });

        return;
    }

})