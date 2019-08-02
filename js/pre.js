/* eslint-env browser */
document.querySelector(".titulo").textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for( var i = 0 ; i < pacientes.length ; i++){
    
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var gordura = pacientes[i].querySelector(".info-gordura").textContent;
    var nome = pacientes[i].querySelector(".info-nome").textContent;
    
    showPaciente(pacientes[i],altura,peso,gordura,nome);
   
}

//--------------------------------------------------- functions -----------------------------
function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function canPeso(peso){
    if( peso <= 600 && peso > 0){
        return true;
    }else{
        return false;
    }
}

function canAltura(altura){
    if( altura <= 4.00 && altura > 0.3 ){
        return true;
    }else{
        return false;
    }
}

function canGordura(gordura){
    if( gordura >= 1 && gordura <=60 ){
        return true;
    }else{
        return false;
    }
}

function canNome(name){
    if(name.length == 0){
        return false;
    }else{
        return true;
    }
}

function showPaciente(paciente,altura,peso,gordura,nome){
     if( !canAltura(altura) || !canPeso(peso) || !canAltura(altura) || !canNome(nome)){
        console.log("Algum erro nos dados passados");
        paciente.querySelector(".info-imc").textContent = "Algo pode estar errado!";
        paciente.classList.add("paciente-erro");
    }else{
        var imc = calculaImc(peso,altura);
        pacientes[i].querySelector(".info-imc").textContent = imc ;
    }
}