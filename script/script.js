var money = document.getElementById("money")
var taxa = document.getElementById("taxa")
var tempo = document.getElementById("tempo")
var botao = document.getElementById("btn")
var simples = document.getElementById("simples")
var composto = document.getElementById("composto")

function calc(){
    var result = parseFloat(money.value) + (parseFloat(money.value) * (parseFloat(taxa.value) / 100) * parseFloat(tempo.value))
    alert(result)
}

function calc2(){
    var result2 = parseFloat(money.value) * ((1 + parseFloat(taxa.value) / 100) ** parseFloat(tempo.value))
    alert(result2)
}

function calcular() {
    if (simples.checked == true) {
        calc()
    } else {
        calc2()
    }
}

botao.addEventListener("click", calcular)