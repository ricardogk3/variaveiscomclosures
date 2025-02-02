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

