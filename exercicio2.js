//Crie um vetor contendo 10 números e faça a média de todos os valores

let vetor = [1,2,3,4,5,6,7,8,9,10];

//Calculo
let soma = 0;
for (let i = 0; i < 10; i++){
    soma += vetor[i];
}

// Média
let media = soma / vetor.length;

// Resultado
console.log("A média é:", media);
    

