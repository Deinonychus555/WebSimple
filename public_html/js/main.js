$(document).ready(function () {
    
    
    // Menú horizontal desplegable con efectos.
    
    
    // Escondemos por defecto los submenús y ponemos el fondo de los elementos a gris claro.
    $(".menu-principal ul li ul li").addClass("hidden").addClass("gris-claro").slideUp(1);
    
    
    
    
     $('li:has(ul)').hover(function () {
        // el primer parametro de stop elimina la cola de eventos, el segundo hace que finalicen los que estan en ejecucion
        $(this).children("ul").children("li").stop(true,true)
            .slideUp(1).animate({opacity: 0}, {duration: 1}); // deja al menu preparado aunque estuviera en mitad de un evento
        $(this).children("ul").children("li")
            .slideDown(2000).animate({opacity: 1}, {duration: 2000}).dequeue();
    }, function () { // salir del hover
        $(this).children("ul").children("li")
            .slideUp(2000).animate({opacity: 0}, {duration: 2000}).dequeue();
    });
    
    
   
   
    $(".menu-principal ul li").hover(function () {
        $(this).removeClass("gris-claro").addClass("gris-oscuro");
    }, function () { // salir del hover
        $(this).removeClass("gris-oscuro");
        $(".menu-principal ul li ul li").addClass("gris-claro"); // no debe colorear de gris el menu padre(usa una imagen)
    });
});