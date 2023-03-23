
function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value / 100;
    var nome = document.getElementById("nome").value;
    const img = document.getElementById("img");
    if (peso != "" && altura != "") {
        var imc = (peso / (altura * altura)).toFixed(2);
        if (imc < 18.5) {
            document.querySelector("#descricao").innerHTML = "Abaixo do peso.";
            img.src = "/img/abaixo-do-peso.jpg";
        } else if (imc < 25) {
            document.querySelector("#descricao").innerHTML = "Peso ideal.";
            img.src = "/img/peso-ideal.png";
        } else if (imc < 30) {
            document.querySelector("#descricao").innerHTML = "Levemente acima do peso.";
            img.src = "/img/levemente-acima.jpg";
        } else if (imc < 35) {
            document.querySelector("#descricao").innerHTML = "Obesidade - Grau I.";
            img.src = "/img/obesidade-1.jpg";
        } else if (imc < 40) {
            document.querySelector("#descricao").innerHTML = "Obesidade - Grau II";
            img.src = "/img/obesidade-2.jpg";
        } else {
            document.querySelector("#descricao").innerHTML = "Obesidade - Grau III";
            img.src = "/img/obesidade-3.jpg";
        }
        document.getElementById("imc").innerHTML = nome + ", seu IMC é de: " + imc;
        abrirModal();
    }
}

function abrirModal() {
    const modal = document.getElementById('container-modal');
    modal.classList.add('abrirModal');
}
function fecharModal() {
    const modal = document.getElementById('container-modal');
    modal.classList.remove('abrirModal');
}