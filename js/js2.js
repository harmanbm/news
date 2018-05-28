//button function 
//variables
var maxcargas=2;
var cargas=0;
var contador=1;

$(function() {
		$("button").click(function() {
				$.getJSON("https://rawgit.com/harmanbm/news/master/data/data"+contador+".json", function( nombres ) {
					mostrarNombres( nombres );
				});
				if (contador==2){$("#botn").html("No hay más noticias");}
				contador++;
				if(contador>2){contador=1};
		});
});
//evento al cargar la pagina se define los eventos
function mostrarNombres(data){
	cargas++;
		$.each(data, function(i, nombre){
			if (cargas<=maxcargas){
				$("#page").append('<div class="row"><div class="col-sm-12" id="News"><div class="noticias"><header class="title"><h2>'+nombre.title+'</h2></header><article><h3>'+nombre.cuerpoNoticia+'</h3></article><div  class="imagenews"><img class="img-responsive img-thumbnail" src="'+nombre.image+'" alt=""></div><div class="date"><h4>'+nombre.date+'</h4></div></div></div></div>');	
			}
		});
}
