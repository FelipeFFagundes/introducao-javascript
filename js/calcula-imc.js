var titulo = document.querySelector(".titulo");
titulo.textContent = "Banana Nutrição";
 
var pacientes = document.querySelectorAll(".paciente")

function calculaImc (peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
} 

for (var i = 0; i < pacientes.length; i++){
 
    var paciente = pacientes[i];
 
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
 
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
 
    var tdImc = paciente.querySelector(".info-imc");
 
    var pesoValido = true;
    var alturaValida = true;
 
    if (peso <= 0 || peso >= 1000){
        console.log("peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }
 
    if(altura <= 0 || altura >= 3.00){
        console.log("altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }
 
    if(alturaValida && pesoValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

