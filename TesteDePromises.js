function carregadados() {
const dadosdanet = fetch('https://www.fundamentus.com.br/detalhes.php?papel=PETR4')
.then(response => response)
.then(data => console.log(data))
}

carregadados()