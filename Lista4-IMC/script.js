function definirImc(){
    var altura = verificarDecimal(Number(document.getElementById("altura").value));
    var peso = Number(document.getElementById("peso").value);
    if(altura != null && peso != null){
        var imcAtual = calcularImc(altura, peso);
        var conclusão = verificarImc(imcAtual, altura, peso);
        document.getElementsByClassName("conteiner")[0].innerHTML = conclusão;
    }
    

}

function verificarDecimal(valor){
    var tempVal = valor;
    if(Number.isInteger(tempVal)){
        tempVal = tempVal/100;
    }
    return tempVal;
}

function calcularImc(valtura, vpeso){
    var tmpPeso = vpeso;
    var tmpAltura = valtura;
    var calc = tmpPeso/Math.pow(tmpAltura, 2);
    return calc.toFixed(2);
}

function verificarImc(imc, altura, peso){
    var tmpImc = imc;
    var tmpAlt = altura;
    var tmpPeso = peso;
    var calcPeso = (tmpImc > 24.99) ? tmpPeso - (24.9 * (Math.pow(tmpAlt, 2))) : (24.9 * (Math.pow(tmpAlt,2) )) - tmpPeso;
    var pesoIdeal = calcPeso.toFixed(2);
    var msg =  "<div>Conclusão:<br> Seu IMC é igual a "+tmpImc+" e isso indica que você está ";
    msg += (tmpImc <= 16.99) ? "<strong>Muito Abaixo do Peso</strong>. Para chegar ao peso ideal deve ganhar "+pesoIdeal+"kg. " : (tmpImc <= 18.49) ? "<strong>Abaixo do Peso</strong>. Para chegar ao peso ideal deve ganhar "+pesoIdeal+"kg. " : (tmpImc <= 24.99) ? "<strong>com o Peso Normal</strong>. Mantenha esse peso." : (tmpImc <= 29.99) ? "<strong>Acima do Peso</strong>. Para chegar ao peso ideal deve perder "+pesoIdeal+"kg. " : (tmpImc <= 34.99) ? "<strong>com Obesidade Grau I</strong>. Para chegar ao peso ideal deve perder "+pesoIdeal+"kg. " : (tmpImc <= 40) ? "<strong>com Obesidade Grau II</strong>. Para chegar ao peso ideal deve perder "+pesoIdeal+"kg. " : "<strong>com Obesidade Grau III</strong>. Para chegar ao peso ideal deve perder "+pesoIdeal+"kg. ";
    msg += "</div>";
    return msg; 
}