$(function(){
    
    // Con JQuery el evento se llama 'click' , en javascript se le añadiría al objeto la propiedad 'onclick'
    
    $("#prompt").click(function(){
        
        var valor=window.prompt("window.prompt(\"Introduce un valor\")");
       
        
        $("#prompt + span + input").val(valor);
    
    
    });
    
    
    $("#confirm").click(function(){
        
        var valor=window.confirm("window.confirm(\"mensaje\")");
       
        
        $("#confirm + span + input").val(valor);
    
    
    });
    
      
    $("#alert").click(function(){window.alert("window.alert(\"mensaje\")");});
    
  
    
    $("#window").click(function(){
         window.open("http://www.genbetadev.com/","nombre","weigth:500 height:400");});
    
    
})  ;  // ; al final

