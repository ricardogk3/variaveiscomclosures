function coontadora(){
    var valor = 0
    return{
        
         add(){
            return ++ valor
        },
         reduz(){
            return -- valor
        },
         consolador(){
            return valor
        }
    }

}

const copiafun = coontadora()

console.log(copiafun.consolador())
console.log(copiafun.add())
console.log(copiafun.add())
console.log(copiafun.add())
console.log(copiafun.reduz())
console.log(copiafun.reduz())
console.log(copiafun.reduz())



//criador de funçoes

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  print(add5(2)); // 7
  print(add10(2)); // 12