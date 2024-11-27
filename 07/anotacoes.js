// a função só é execultada se posta em função quando se chama ela 
//para isso usamos o nome da função como : saudacao 
// no () colocamos os parametrosm, podendo ser a,b ou c
// sempre seprados por (,)
//codigo a ser exacultado
// a resposta sóirar exibir quando for chamada como na funcao a seguir:
// algumas funcoes tamabem podem usar funcoes como parametro
//criando uma calculadora 
//Resultado criado pelo professor mudando apenas o operador:
/*
Crie uma função calculadora
A função recebe dois valores e um operador (+, -, *, /)
A função retorna o resultado do calculo
*/

//function calculadora(num1, num2, operador) {
    //let resultado = 0;

    //if(operador === "+") {
       // resultado =  num1 + num2;
    //} else if(operador === "-") {
       //resultado = num1 - num2;
   // } else if (operador === "*") {
        //resultado = num1 * num2;
    //} else if (operador === "/") {
        //resultado = num1 / num2;
   // }

    //return resultado;
//}

//console.log(calculadora(3, 8, "*"));
//console.log(calculadora(3, 0, "/"));
/* codigo 2
function calculadora(num1, num2, operador) { 
    if(operador === "+") {
        return  num1 + num2;
    } else if(operador === "-") {
        return num1 - num2;
    } else if (operador === "*") {
        return num1 * num2;
    } else if (operador === "/") {
        if(num2 === 0) {
            console.log("Impossível dividir por zero")
            return 0;
        }
        return num1 / num2;
    } else {
        return "Operação inválida";
    }
}

console.log(calculadora(50, 0, "/"));
*/
/*
Crie uma função calculadora
A função recebe dois valores e um operador (+, -, *, /)
A função retorna o resultado do calculo

function multiplicar(a,b){
    return a * b;
}
function subitrair(a,b){
    return a - b;
}
function somar(a,b){
    return a + b;
}
function dividir(a,b){
    return a / b;
}

let resultadom = multiplicar(2, 8);
console.log(resultadom);
let resultadosu = subitrair(2, 8);
console.log(resultadosu);
let resultado = somar(2, 8);
console.log(resultado);
let valor = dividir(2, 8);
console.log(valor);
console.log(calculadora(3, 0, "/"));
*/