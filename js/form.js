
var bottom_add = document.querySelector("#adicionar-paciente");
bottom_add.addEventListener("click",function (event){
    //para não recarregar a pagina
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = getValueForm(form);

    
    if(canPaciente(paciente)){
        buildPaciente(paciente);
        form.reset();
    }

})


//---------------------------------------------------functions----------------------------

function buildPaciente(paciente){
    var novo_paciente_tr = builtTr(paciente);
    var tabela_pacientes = document.querySelector("#tabela-pacientes");
    tabela_pacientes.appendChild(novo_paciente_tr);
}


function getValueForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    
    return paciente;
}

// funcao que cria o td ( uma caracteristica da linha) , pode ser interpretada com uma coluna
function makeTd(dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

//funcao constroi um Tr para um Td
function builtTr(paciente) {
    
    var novo_paciente_tr = document.createElement("tr");
    novo_paciente_tr.classList.add("paciente");
    
    var novo_paciente_td_nome = makeTd(paciente.nome,"info-nome");
    var novo_paciente_td_peso = makeTd(paciente.peso,"info-peso");
    var novo_paciente_td_altura = makeTd(paciente.altura,"info-altura");
    var novo_paciente_td_gordura = makeTd(paciente.gordura,"info-gordura");
    var novo_paciente_td_imc = makeTd(paciente.imc,"info-imc");
    
    novo_paciente_tr.appendChild(novo_paciente_td_nome);
    novo_paciente_tr.appendChild(novo_paciente_td_peso);
    novo_paciente_tr.appendChild(novo_paciente_td_altura);
    novo_paciente_tr.appendChild(novo_paciente_td_gordura);
    novo_paciente_tr.appendChild(novo_paciente_td_imc);
    
    return novo_paciente_tr;
}


//funcao que trata o evento de ser permitido ou não adicionar um paciente
function checkForm(ok,classe){
    if(!ok){
        
        if(document.querySelector(".li-erro-" + classe) == null){
            // cria a mensagem de erro que eh um li
            var li = document.createElement("li");
            li.textContent = "Dado inválido : " + classe ;
            li.classList.add("li-erro-" + classe);
            var ul = document.querySelector("#mensagem-erro");
            ul.appendChild(li); 
            
            // deixa o fundo do input do form vermelho
            var fundo_vermelho = document.querySelector("#"+classe);
            fundo_vermelho.classList.add("input-erro");
        }
        
        console.log("Erro no dado de " + classe);
        return 0;

    }else{
        if(document.querySelector(".li-erro-" + classe) != null){
            //tira o texto
            document.querySelector(".li-erro-" + classe).innerHTML = "";
            //tira o fundo vermelho do input do form
            var corrige_fundo_vermelho = document.querySelector("#" + classe);
            corrige_fundo_vermelho.classList.remove("input-erro"); 
        }
        return 1;
    }
}


// funcao que valida a inclusao do paciente
function canPaciente(paciente){
    var sucess = 0;
    sucess += checkForm(canAltura(paciente.altura) , "altura");
    sucess += checkForm(canPeso(paciente.peso) , "peso");
    sucess += checkForm(canNome(paciente.nome) , "nome");
    sucess += checkForm(canGordura(paciente.gordura) , "gordura");
    
    if(sucess == 4){
        return true;
    }else{
        return false;
    }
}