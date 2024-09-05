//2. Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição.

n=10
i=1
numero1=0
numero2=1
Fibonacci=0
 
while(i!=n){
    Fibonacci=numero1+numero2
    numero1=numero2
    numero2=Fibonacci
    n=n-1
    console.log(Fibonacci)
}