var campo_filtro = document.querySelector("#filtro-tabela");

campo_filtro.addEventListener("input",function(){
    
    var pacientes = document.querySelectorAll(".paciente");
    
    console.log(this.value);
    
    if(this.value.length > 0){
        for( var i = 0 ; i < pacientes.length ; i++){
            var td_nome = pacientes[i].querySelector(".info-nome").textContent;
            
            // i = case insensitive
            // this.value is what I want to find
            var fragment = new RegExp(this.value,"i");
            
            if(fragment.test(td_nome)){
                pacientes[i].classList.remove("invisible");
            }else{
                pacientes[i].classList.add("invisible");
            }
        }
    }else{
        for( var i = 0 ; i < pacientes.length ; i++){
            pacientes[i].classList.remove("invisible");
        }
    }
    
});