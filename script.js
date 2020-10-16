/* id --- alt  + shift + a */
/* llamo el id,uso el metodo css, el primer
 parametro es la caracteristica a cambiar y 
 el segundo parametro es el valor*/

$("#titulo").css("color", "violet")

$("#parrafo").css("font-family", "ink free")

/* class */
$(".mensaje").css("text-aling", "center").css("color", "violet").css("font-size", "15px")

/* even1tos */ 
/* voy a agregar una funcion con un click */

$("#mental").click (function(){
    $(this).css ("font-family", "wide latin")
})

$("#mental").dblclick (function(){
    $(this).css ("color", "blue")
})

$("#modelo").click(function(){
    $(this).css("font-size", "20px")
})


$("#modelo").dblclick(function(){
    $(this).css("color", "fuchsia")
})


$("#aprendizaje").click(function(){
    $(this).css("font-family", "algerian")
})

$("#aprendizaje").dblclick(function(){
    $(this).css("background", "green")
})

$("#etapas").click (function(){
    $(this).css("font-size", "35px")
})

$("#etapas").click (function(){
    $(this).css("font-family", "impact")
})


$("#grupo").click(function(){
    $(this).css ("font-size", "25px")
})

$("#grupo").dblclick(function(){
    $(this).css ("color", "red")
})


$("#empresas").click(function(){
    $(this).css("font-size", "60px")
})

$("#empresas").dblclick(function(){
    $(this).css("background", "yellow")
})


$("#juzgado").click(function(){
    $(this).css("font-size","45px")
})

$("#juzgado").dblclick(function(){
    $(this).css("color","green")
})


$("#rendimiento").click(function(){
    $(this).css("font-size", "65px")
})

$("#rendimiento").dblclick(function(){
    $(this).css("background", "gray")
})

$("#sexualidad").click (function(){
    $(this).css("font-size", "20px")
})

$("#sexualidad").dblclick (function(){
    $(this).css("color", "blue")
})


$("#justicia").click(function(){
    $(this).css("font-size","70px")
})

$("#justicia").dblclick(function(){
    $(this).css("font-family","ravie")
})

$("div").mouseout(function(){
    $(this).css("background", "orange")
}

)