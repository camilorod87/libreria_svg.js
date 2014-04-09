
 window.onload = function()
 {
 	alert("Onload");
 	var color = "grenn";
 	var dibujar = SVG('divuja').size("100%", 300);


    var posOrg = [[150,0],[0,0],[0,200],[200,200],[200,0],[350,0],[350,100],[220,100],[350,200]];//coordenadas para crear "CR"

	var posDestino = [[0,200], [100,200], [100, 80],[50,80],[50,50],[100,0],[150,00],[150,200],[250,200]];//coordenadas para crear "1"

 	var continua = dibujar.polyline(posOrg).fill("none").stroke({width : 4});
 	var animacion = false;
 	nom_div("movLinea").addEventListener('click', function(event)
 	{
 		if(!animacion)//negacion de variable
 		{
 			continua.animate(1000).plot(posDestino); //velocidad de traslacion
 		}
 		else
 		{
 			continua.animate(1000).plot(posOrg);
 		}
 		animacion = !animacion;
 	});


 	function nom_div(div)
 	{
 		return document.getElementById(div);
 	}
 }
