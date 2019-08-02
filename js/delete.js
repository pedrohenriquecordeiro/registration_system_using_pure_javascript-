var paciente = document.querySelectorAll(".paciente");

var table = document.querySelector("table");

table.addEventListener("dblclick",function(event){
    
    var currentTarget = event.target;
    
    if(currentTarget.tagName == 'TD'){
         var parentCurrent = currentTarget.parentNode;
    
        parentCurrent.classList.add("fadeOut");

        setTimeout(function(){
            parentCurrent.remove();
        },500);
    }
    
    
    
    //event.target.parentNode.remove();
})