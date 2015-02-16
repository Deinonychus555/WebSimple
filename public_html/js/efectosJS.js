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
         window.open("http://www.genbetadev.com/","nombre","weigth:500 height:400");
     });
     
     
     
    $("#mostrar_texto").click(function(){
        
        /*
        
         window.document.open(); // Se abre el flujo del documento.
         
         window.document.write("Se ha abierto el flujo"); // Se escribe
         
         window.document.close(); // Se cierra el flujo del documento.
         
         // Todo correcto :)
         
         */
        
        //NO FUNCIONA
        
        var etiqueta=window.document.createElement("div");
        var contenido=window.document.createTextNode("Se ha abierto el flujo");
        etiqueta.appenChild(contenido);
        $("#mostrar").appendChild(etiqueta);
   
     });
     
     
     
     $("#romper").click(function(){
         
         document.write("¡¡Se ha roto la ṕagina!!");
         
         // Como la página ya estaba cargada (cargado todo el árbol DOM) y no se
         //ha abierto el flujo del documento, la página se rompe.
     })
     
     
     var persona={
         
         nombre:"Juan",
         apellido:"Vitorino",
         edad:19,
         telefono:"662233445"
     }
     
     $("#mostrar_persona").click(function(){
         
         // Se va a mostrar todas las propiedades de pesona
         var texto="Persona: \n\n"
         
         for (propiedad in persona){
             
             texto+=propiedad+": "; // Capturamos el nombre de la propiedad
             
             texto+=persona[propiedad].toString()+"\n"; // Captturamos el valor de la propiedad
             
             // Observamos que para acceder a la propiedad ha de hacerse con notación de array.
         }
         //document.write(texto);
         
         $("textarea").removeClass("hidden");
         $("textarea").val(texto);
     })
     
     $("#input_number").click(function(){
         
         var number=NaN;
         // isNan() solo acepta tipo Number
         while(isNaN(parseInt(number))){
             number=window.prompt("Introduce un número", "Ej: 3");
         }
         
         $("this , .input_number").val(number);
     })
     
     
     $(".retroceso").click(function(){
         history.go(-1);
     })
    
    
})  ;  // ; al final

