document.getElementById(mostrar-variaveis).addEventListener('click', function() {
    let idade = 25;
    let nome = "Ana";
    let casado = true;

    document.getElementById(variavel-simples).innerText = `Simples: Nome: ${nome}, Idade: ${idade}, Casado: ${casado}`;

    let frutas = ["maçã", "banana", "laranja"];
    let pessoa = {
        nome: "carlos",
        idade: 30,
        casado: false
    };
    document.getElementById('variavel-composta').innerText = `compostas: Frutas: ${frutas.join(', ')},
    pessoa: nome: ${pessoa.nome}, Idade: ${pessoa.idade}, casado: ${pessoa.casado}`;

    let a = 10;
    let b = 20;
    let c = 30;

    let variaveis = [a, b, c];
    let chave = "dinamica";
    let objetoDinamico = {
        dinamica: "Este é um valor dinamico"
    };

    document.getElementById('variavel-de-variaveis').innerText = `variaveis de variaveis:
    Array: ${variaveis.join(', ')}, objeto Dinamico: ${objetoDinamico[chave]}`
});

let frutasArray = ["maçã","banana", "laranja"];

document.getElementById('form-frutas').addEventListener('submit', function(event) {
    event.preventDefault();
    let novaFruta = document.getElementById('nova-fruta').value;
    frutasArray.push(novaFruta);
    document.getElementById('lista-frutas').innerText = `Lista de frutas: ${frutasArray.join(',')}`;
    document.getElementById('nova-fruta').value = ''
})

//-------------------------------------------------------

