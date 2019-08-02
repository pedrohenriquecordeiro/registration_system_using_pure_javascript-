var botao_busca = document.querySelector("#buscar-pacientes");

botao_busca.addEventListener("click",function(){
    
    var request = new XMLHttpRequest();
    
    request.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    
    request.addEventListener("load",function(){
        
        if(request.status == 200){
             var json = JSON.parse(request.responseText);
        
            json.forEach(function(paciente){
               buildPaciente(paciente);          
            });
        }else{
            alert(request.status + " ->" + request.responseText);
        }
        
       
        
    });
    
    request.send();
    
    
});