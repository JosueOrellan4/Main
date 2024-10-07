/*
function numeroprimo (){
    numero=487
    if(numero == 2){
      console.log(numero+' é primo.')
    }else if(numero %2 != 0){
      console.log(numero+' é primo.')
    }else if (numero %2 == 0){
      console.log(numero+' não é primo.')
    }
  }numeroprimo()
  


  function fatorial (numeroescolhido){
    resultado = 1
    for(cont = numeroescolhido; cont>=1; cont=cont - 1){ // ele só vai parar se a variavel numero escolhido for menor ou igual que 1 mas se não ele vai continuar multiplicando resultado * cont
       
       resultado = resultado * cont
   
    }
   console.log(resultado)

    }fatorial(10)
    


     function encontrarMaiorNumero(lista) {
      if (lista.length === 0) {  // length indica a quantidade de elementos no array
          return null;     // Retorna null se a lista estiver vazia
      }
  
      let maiorNumero = lista[0]; // Inicializa com o primeiro número
  
      for (let i = 1; i < lista.length; i++) { //aqui ele compara a quantidade de casas pra n ultrapassar 
          if (lista[i] > maiorNumero) { //confere numero por numero com i se é maior
              maiorNumero = lista[i]; // Atualiza se encontrar um número maior
          }
      }
  
      return maiorNumero;
  }
  
  // Exemplo de uso:
  const numeros = [3, 5];
  const maior = encontrarMaiorNumero(numeros); //aqui ele pega numeros e coloca para a function ler e executa depois em baixo o codigo.
  console.log(maior); // Saída: 5
  
  

  function calcularMedia(numeros) {
    if (numeros.length === 0) return 0 // Retorna 0 se a lista estiver vazia

    const soma = numeros.reduce((acc, num) => acc + num, 0); // O reduce serve para combinar todos os elementos de um array em um único valor, seja ele um número, um objeto, uma string, ou qualquer outra estrutura.
    const quantidade = numeros.length; // Conta a quantidade de números
    const media = soma / quantidade; // Calcula a média
    return media; // Retorna a média
}

// Exemplo de uso:
const listaDeNumeros = [3, 5, 6, 7, 8]
const media = calcularMedia(listaDeNumeros)
console.log(`A média é: ${media}`); // Exibe a média



var numero1 = parseFloat(prompt('digite o primeiro numero'))
var numero2 = parseFloat(prompt('digite o segundo numero'))

function calculodosnumeros(){
  resultadosoma = numero1 + numero2
  resultadosubtracao = numero1 - numero2
  resultadomultiplicacao = numero1 * numero2
  resultadodivisao= numero1 / numero2
  console.log (resultadosoma)
  console.log(resultadosubtracao)
  console.log(resultadomultiplicacao)
  console.log(resultadodivisao)
}
calculodosnumeros()



function apenasnumerospares (lista){
  if (lista.length === 0) {
    return null
  }
  const pares = []
  for (let i = 0; i < lista.length; i++){
    if (lista[i] % 2 == 0){
      pares.push(lista[i])
    }
  }
  return pares.length > 0 ? pares : null
}
const numeros = [5,4,19,20,22]
const pares = apenasnumerospares(numeros)
console.log(pares)



function calcularSoma(numeros) {
  if (numeros.length === 0) return 0
  const soma = numeros.reduce((acc, num) => acc + num, 0)
  console.log("A soma dos números é " + soma)
}

const numeros = [5, 10, 20,500]

// Chama a função com a lista de números
calcularSoma(numeros)


function apenasnumerosnegativos(lista){
  if (lista.length === 0){
    return null
  }
  const negativos = []
  for (let i = 0; i<lista.length;i++){
    if (lista[i] < 0){
      negativos.push(lista[i])
    }
  }
  return negativos.length > 0 ? negativos : null
}
const numeros = [-1,-5,-6,12,200,0,-7]
const negativos = apenasnumerosnegativos(numeros)
console.log(negativos)



function contarVogais(palavra) {
  var vogais = 'aeiouAEIOU' // letras maiusculas e minusculas
  var contador = 0

  for (var i = 0;i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
      contador++
    }
  }

  return contador
}

var palavra = ("Bom dia");
var quantidadeVogais = contarVogais(palavra)
console.log("A quantidade de vogais na palavra é: " + quantidadeVogais)



// Função para verificar se um número é primo
function isPrime(num) {
  if (num <= 1) return false // Números menores ou iguais a 1 não são primos
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // Se divisível, não é primo
  }
  return true; // Se não for divisível por nenhum número, é primo
}

// Função principal
function displayPrimes() {
  const number = 50

  if (isNaN(number) || number < 1) {
      console.log("Por favor, digite um número válido maior que 0.")
      return
  }

  console.log(`Números primos de 1 até ${number}:`)
  for (let i = 1; i <= number; i++) {
      if (isPrime(i)) {
          console.log(i)
      }
  }
}

// Chama a função principal
displayPrimes();


function calcularMedia(numeros) {
   
    if (numeros.length === 0) { //se não ter nada vai retornar zero
        return 0
    }

   
    let soma = 0
    for (let i = 0; i < numeros.length; i++) { //
        soma += numeros[i] // Adiciona cada elemento à soma
    }

    
    let media = soma / numeros.length
    return media
}


const numeros = [10, 20, 30, 40, 50]
const media = calcularMedia(numeros)
console.log(`A média é: ${media}`)




function removerEspacos() {
  
  const frase =("Bom dia Turma")
  
  
  const fraseSemEspacos = frase.replace(/\s+/g, ''); 
//\s corresponde a qualquer caractere de espaço em branco (incluindo espaços, tabulações e quebras de linha). + significa um ou mais desses caracteres. g é a flag que indica que a busca deve ser global, ou seja, em toda a string.
  // Exibe a frase sem espaços
  console.log("Frase sem espaço: "+fraseSemEspacos)
}


removerEspacos()
*/
