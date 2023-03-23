const btn_gerar_folha = document.querySelector("#btn_gerar_folha");

btn_gerar_folha.addEventListener("click", () => {

    var nome_funcionario = document.querySelectorAll(".inputs")[0].value;
    var num_horas = document.querySelectorAll(".inputs")[1].value;
    var valor_hora = document.querySelectorAll(".inputs")[2].value;
    var num_filhos = document.querySelectorAll(".inputs")[3].value;
    var salario_familia = num_filhos * 60;
    var salario_bruto = salario_familia + (num_horas * valor_hora);
    var desconto_inss;
    var desconto_ir;

    if (salario_bruto <= 1302.00) {
        desconto_inss = salario_bruto * (7.5 / 100);
    } else if (salario_bruto >= 1302.01 && salario_bruto <= 2571.29) {
        desconto_inss = salario_bruto * (9 / 100);
    } else if (salario_bruto >= 2571.30 && salario_bruto <= 3856.94) {
        desconto_inss = salario_bruto * (12 / 100);
    } else {
        desconto_inss = salario_bruto * (14 / 100);
    }

    if (salario_bruto <= 1903.98) {
        desconto_ir = 0;
    } else if (salario_bruto >= 1903.99 && salario_bruto <= 2826.65) {
        desconto_ir = salario_bruto * (7.5 / 100);
    } else if (salario_bruto >= 2826.66 && salario_bruto <= 3751.05) {
        desconto_ir = salario_bruto * (15 / 100);
    } else if (salario_bruto >= 3751.06 && salario_bruto <= 4664.68) {
        desconto_ir = salario_bruto * (22.5 / 100);
    } else {
        desconto_ir = salario_bruto * (27.5 / 100);
    }

    var salario_liquido = salario_bruto - desconto_inss - desconto_ir;

    document.querySelectorAll(".inputs")[4].value = salario_bruto;
    document.querySelectorAll(".inputs")[5].value = desconto_inss;
    document.querySelectorAll(".inputs")[6].value = desconto_ir;
    document.querySelectorAll(".inputs")[7].value = salario_familia;
    document.querySelectorAll(".inputs")[8].value = salario_liquido;

});




