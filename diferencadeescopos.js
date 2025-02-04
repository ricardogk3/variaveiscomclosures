var globalvar = 'Var global'
let globallet = 'Let global'
let globalconst = 'Const global'

function mostraescopos() {
    let locallet = 'Let local'
    console.log(locallet)
}
{
    var blocovar = "var bloco"
    let blocolet = "let bloco"
    const blococonst = "const block"
}


mostraescopos()
console.log(globalvar)    
console.log(globallet)
console.log(globalconst)
console.log(blocovar)    
// console.log(blococonst)
// console.log(blocolet)




// closure para variaveis 

function criarContador() {
    let contador = 0; // Variável protegida no escopo da função

    return function () {
        contador++; 
        console.log(`Contador: ${contador}`);
    };
}

const incrementar = criarContador();

incrementar(); 
incrementar(); 
incrementar(); 


const incrementar2 = criarContador();

incrementar2() //começa um novo contador














