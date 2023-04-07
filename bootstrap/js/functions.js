function mostrar() {
        
    var element = document.getElementById("navbarSupportedContent");
    if (element.style.display === "block"){
        element.style.display='none';
    }else{
        element.style.display='block';
    }             
}

function ocultar() {
    var element = document.getElementById("navbarSupportedContent");
    element.style.display='none';
}