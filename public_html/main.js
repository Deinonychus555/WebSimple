$(document).ready(function () {
    $(".menu-principal ul li ul li").addClass("hidden").addClass("gris-claro").slideUp(1);

    $('ul li:has(ul)').hover(function () {
        // el primer parametro de stop elimina la cola de eventos, el segundo hace que finalicen los que estan en ejecucion
        $(".menu-principal ul li ul li").stop(true,true)
            .slideUp(1).animate({opacity: 0}, {duration: 1}); // deja al menu preparado aunque estuviera en mitad de un evento
        $(".menu-principal ul li ul li")
            .slideDown(2000).animate({opacity: 1}, {duration: 2000}).dequeue();
    }, function () { // salir del hover
        $(".menu-principal ul li ul li")
            .slideUp(2000).animate({opacity: 0}, {duration: 2000}).dequeue();
    });

    $(".menu-principal ul li").hover(function () {
        $(this).removeClass("gris-claro").addClass("gris-oscuro");
    }, function () {
        $(this).removeClass("gris-oscuro");
        $(".menu-principal ul li ul li").addClass("gris-claro"); // no debe colorear de gris el menu padre(usa una imagen)
    });
});