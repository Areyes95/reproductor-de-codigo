function actualizarSalida(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cssPanel").val()+"</style></head><body>"+$("#htmlPanel").val()+"</body></html>");
    // Lo siguiente ejecuta el javascript en la página original no en el iframe
    //eval($("#javascriptPanel").val());
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val()); //esto si
}

/*  La funcion hover puede manejar
    la entrada y salida del puntero a través
    de dos funciones */
$(".boton").hover(function(){                   // Cuando el puntero se posiciona sobre los botones
    $(this).addClass("botonMarcado");           // Cambia a un color
},function(){
    $(this).removeClass("botonMarcado");        // AL salir el puntero, se cambia al color por defecto
});

// Con toggleClass alternamos una clase
$(".boton").click(function(){
    $(this).toggleClass("activo");              // Alterna una clase
    $(this).removeClass("botonMarcado");
    

    var panelId = $(this).attr("id") + "Panel";
    $("#"+panelId).toggleClass("oculto");

    
    var numeroDePanelesActivos=4 - $('.oculto').length;
    $(".panel").width(($(window).width()/numeroDePanelesActivos)-10);
});
//
$(".panel").height($(window).height() -$("#barra").height()-15);
$(".panel").width($(window).width()/2 -10);
actualizarSalida();

$("textarea").on('change keyup paste',function(){
    actualizarSalida();
}); 