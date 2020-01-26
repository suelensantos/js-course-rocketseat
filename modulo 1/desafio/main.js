// Exercício 1

var endereco = {  
  rua: "Rua dos pinheiros",  
  numero: 1293,  
  bairro: "Centro",  
  cidade: "São Paulo",  
  uf: "SP"
};

function enderecoCompleto() {
return "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + 
          ", na rua " + endereco.rua + " com nº " + endereco.numero + ".";
}

console.log(enderecoCompleto());

// Exercício 2

function pares(x, y) {
  console.log("Números pares entre - " + x + " e " + y + ":");
  for(var i = x+1; i < y; i++) {
    if(i % 2 === 0) {
      console.log("O número " + i + " é PAR.");
    }
  }
}

pares(32, 321);

// Exercício 3

function temHabilidade(skills) {
return skills.indexOf("Javascript") !== -1;
}

var skills = ["Javascript", "RecatJS", "React Native"];
console.log("A habilidade Javascript está presente no vetor? " + temHabilidade(skills));

// Exercício 4

function experiencia(anos) {
  if(anos <= 1) {
    return "Iniciante";
  } else if(anos <= 3) {
    return "Intermediário";
  } else if(anos <= 6) {
    return "Avançado";
  } else {
    return "Jedi Master";
  }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

// Exercício 5

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javasciprt", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function exibeHabilidades(usuarios) {
  for(usuario of usuarios) {
    console.log("O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(", "));
  }
}

exibeHabilidades(usuarios);
