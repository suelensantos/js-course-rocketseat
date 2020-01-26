// Exercício 1
// Criar uma função que recebe idade de um usuário e retorna uma promise, que depois de 2 segundos
// retornará se usuário é maior ou não que 18 anos. Se o usuário tiver mais de 18, o resultado deve 
// cair no .then, caso contrário, no .catch

function checaIdade(idade) {
  // retonar uma promise
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if(idade >= 18) {
        resolve();
      } else {
        reject();
      }
      // idade >= 18 ? resolve() : reject();
    }, 2000);
  });
}

checaIdade(20)
  .then(function() {
    console.log("MAIOR que 18 anos");
  })
  .catch(function() {
    console.log("MENOR que 18 anos");
  });

// Exercício 2
// Criar uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o nome
// do usuário e clicar no botão buscar, a aplicação deve buscar pela API do Github os dados de 
// repositórios do usuário e mostrá-los em tela.
// URL de exemplo: https://api.github.com/users/diego3g/repos

// Exercício 3
// A partir do resultado do exemplo anterior, adicione um indicador de carregamento em tela no
// lugar da lista apenas enquanto a requisição estiver acontecendo: <li> Carregando... </li>
// Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.

var inputElement = document.querySelector("#app input");
var listElement = document.querySelector("#app ul");

function renderRepositories(repositories) {
  listElement.innerHTML = ''; // apaga todos os elementos que estão dentro de ul

  for(repo of repositories) {
    // console.log(repo);
    var repoElement = document.createElement('li');
    var nameRepo = document.createTextNode(repo.name);

    repoElement.appendChild(nameRepo);
    listElement.appendChild(repoElement);
  }
}

function renderLoading() {
  listElement.innerHTML = '';

  var loadingElement = document.createElement('li');
  var textLoading = document.createTextNode('Carregando...');

  loadingElement.appendChild(textLoading);
  listElement.appendChild(loadingElement);
}

function renderError() {
  listElement.innerHTML = '';

  var errorElement = document.createElement('li');
  var textError = document.createTextNode('Não foi possível efetuar a busca! Erro no nome!');

  errorElement.appendChild(textError);
  listElement.appendChild(errorElement);
}

function getUserRepositories() {
  var name = inputElement.value;
  if(!name) {
    alert('Digite um nome de usuário do Github');
  }
  const url = `https://api.github.com/users/${name}/repos`;

  renderLoading();
  axios.get(url)
    .then(function(response) {
      // console.log(response);
      renderRepositories(response.data);

      inputElement.value = "";
    })
    .catch(function(error) {
      // console.warn(error);
      // alert('Não foi possível efetuar a busca!');
      renderError();
    });
}
