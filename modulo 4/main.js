// Requisições AJAX 
// São requisições assíncronas realizadas a algum back-end.
// No js, ao invés de recarregar a página para trazer as novas informações do servidor, utiliza-se o ajax
// como forma de requisitar as informações do servidor sem precisar atualizar a página.

// servidor utilizado: API do github. Ex.: https://api.github.com/users/diego3g

var xhr = new XMLHttpRequest(); // essa função dá acesso às funcionalidades do ajax 

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}

// Promises
// São códigos que não vão influenciar na linha do tempo do código js. 
// São funções que vão devolver valor de resultados de sucesso ou erro só depois de um tempo. Não precisa
// se preocupar quando esse valor será retornado. 

var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest(); 

    xhr.open('GET', 'https://api.github.com/users/diego3g');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        // sucesso
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    }
  });
}

// var resultado = minhaPromise(); // o js não espera a minhaPromise() terminar para interpretar a próxima linha, o console.log().
// console.log(resultado);

minhaPromise()
  // é executado quando se chama o resolve da promise (status 200). 
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });

// Biblioteca AXIOS
// Permite fazer as requisições assíncronas em js
// Praticamente executa o XMLHttpRequest por baixo dos panos

axios.get('https://api.github.com/users/diego3g') 
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
