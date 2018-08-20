app.service("servicoFeed", function (Util, $rootScope, $http) {
  return {
    obterListaFeed: obterListaFeed,
    registrarFeed: registrarFeed,
    validarFeed: validarFeed,
    obterListaPost: obterListaPost,
    marcarLido: marcarLido,
    lerFeed: lerFeed,
    excluirFeed: excluirFeed,
    criarPost: criarPost
  };

  function obterListaFeed() {
    //obtem a lista de todos os feeds
    var listaFeeds = [];

    var feedsAux = Util.obterObjeto("Feeds");
    if (feedsAux != "") {
      listaFeeds = Util.converterParaObjeto(feedsAux);
    }

    return listaFeeds;
  }

  function lerFeed(feedUrl) {
    //ex: http://rss.uol.com.br/feed/tecnologia.xml
    //chama a api utilitária que da parse no xml do rss
    return $http.jsonp(
      "//api.rss2json.com/v1/api.json?callback=JSON_CALLBACK&rss_url=" +
      encodeURIComponent(feedUrl)
    );
  }

  function validarFeed(feed) {
    //cria o objeto que será retornado
    var resposta = {};

    //obtem a lista
    var listaFeeds = obterListaFeed();

    resposta.resultado = true;

    //devolve obj com o erro se tiver
    listaFeeds.forEach(item => {
      if (feed.name == item.name || feed.url == item.url) {
        resposta.resultado = false;

        if (feed.name == item.name) {
          resposta.errorNome = "Nome já existente.";
        }
        if (feed.url == item.url) {
          resposta.errorUrl = "URL já existente.";
        }
      }
    });

    return resposta;
  }

  function criarPost(post) {
    //obtem a lista de posts
    var listaPosts = obterListaPost();

    //registra o post criado
    listaPosts.push(post);
    Util.salvarObjeto("Posts", listaPosts);
  }

  function registrarFeed(feed) {
    //obtem a lista de feeds
    var listaFeeds = obterListaFeed();

    //registra o feed criado
    lerFeed(feed.url)
      .then(function (res) {
        if (
          res != null &&
          res.data != null &&
          res.data.items != null &&
          res.data.items.length > 0
        ) {
          var posts = res.data.items;

          for (var index = 0; index < posts.length; index++) {
            var element = posts[index];
            var novoPost = {
              title: element.title,
              url: element.link,
              text: element.description,
              read: false,
              guid: Util.criarGuid(),
              guidFeed: feed.guid
            };

            //registro post obtido do feed
            criarPost(novoPost);
          }

          listaFeeds.push(feed);
          Util.salvarObjeto("Feeds", listaFeeds);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function obterListaPost(guid) {
    //obtem a lista de todos os posts
    var listaPosts = [];
    var listaPostsSelecionado = [];

    var postsAux = Util.obterObjeto("Posts");
    if (postsAux != "") {
      listaPosts = Util.converterParaObjeto(postsAux);
    }

    //verifica qual post é daquele feed pelo guid
    listaPosts.forEach(item => {
      if (guid == item.guidFeed || guid == undefined) {
        listaPostsSelecionado.push(item);
      }
    });

    return listaPostsSelecionado;
  }

  function marcarLido(obj) {
    //obtem a lista de posts
    var listaPosts = obterListaPost();

    //identifica o post e altera a propriedade read para true ou false
    listaPosts.forEach(element => {
      if (element.guid == obj.guid) {
        element.read = !element.read;
      }
    });

    Util.salvarObjeto("Posts", listaPosts);
  }

  function excluirFeed(guid) {
    //exclui o feed selecionado e seus posts
    var listaPosts = obterListaPost(guid);
    var listaFeeds = obterListaFeed();
    var indexExcluir = -1;

    listaFeeds.forEach((item, index) => {
      if (guid == item.guid) {
        indexExcluir = index;
      }
    });

    if (indexExcluir != -1) {
      listaPosts = listaPosts.filter(item => item.guidFeed != guid);
      Util.salvarObjeto("Posts", listaPosts);
      listaFeeds.splice(indexExcluir, 1);
      Util.salvarObjeto('Feeds', listaFeeds);
    }
  }
});
