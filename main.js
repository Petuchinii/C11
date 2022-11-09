var lienzo = new fabric.Canvas('miLienzo');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var objeto_jugador= "";
var bloque_objeto_imagen= "";

function actualización_jugador()
{
	fabric.Image.fromURL("player.png", function(Img) {
	objeto_jugador = Img;
	objeto_jugador.scaleToWidth(150);
	objeto_jugador.scaleToHeight(140);
	objeto_jugador.set({top:player_y,left:player_x});
	lienzo.add(objeto_jugador);
	});
}

function nueva_imagen(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	bloque_objeto_imagen = Img;
	bloque_objeto_imagen.scaleToWidth(block_image_width);
	bloque_objeto_imagen.scaleToHeight(block_image_height);
	bloque_objeto_imagen.set({top:player_y,left:player_x});
	lienzo.add(bloque_objeto_imagen);
	});

}

window.addEventListener("keydown", mi_TeclaPulsada);

function mi_TeclaPulsada(e)
{
teclaPresionada = e.keyCode;
console.log(teclaPresionada);
if(e.shiftKey == true && teclaPresionada == '80')
{
	console.log("P y Shift presionadas juntas");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("anchura_actual").innerHTML = block_image_width;
	document.getElementById("altura_actual").innerHTML = block_image_height;	
}
if(e.shiftKey && teclaPresionada == '77')
{
	console.log("M y Shift presionadas juntas");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("anchura_actual").innerHTML = block_image_width;
	document.getElementById("altura_actual").innerHTML = block_image_height;
}

	if(teclaPresionada == '38')
	{
		arriba();
		console.log("arriba");
	}
	if(teclaPresionada == '40')
	{
		abajo();
		console.log("abajo");
	}
	if(teclaPresionada == '37')
	{
		izquierda();
		console.log("izquierda");
	}
	if(teclaPresionada == '39')
	{
		derecha();
		console.log("derecha");
	}

  if (teclaPresionada == '69') {
	nueva_imagen('yellow_wall.png');
	console.log ("e");
  }
  
  if (teclaPresionada == '82') {
	nueva_imagen('wall.jpg');
	console.log ("r");
  }

  if (teclaPresionada == '68') {
	nueva_imagen('unique.png');
	console.log ("d");
  }

  if (teclaPresionada == '87') {
	nueva_imagen('trunk.jpg');
	console.log ("w");
  }
  
  if (teclaPresionada == '83') {
	nueva_imagen('roof.jpg');
	console.log ("s");
  }

  if (teclaPresionada == '65') {
	nueva_imagen('light_green.png');
	console.log ("a");
  }

  if (teclaPresionada == '70') {
	nueva_imagen('ground.png');
	console.log ("f");
  }

  if (teclaPresionada == '81') {
	nueva_imagen('dark_green.png');
	console.log ("q");
  }

  if (teclaPresionada == '84') {
	nueva_imagen('cloud.jpg');
	console.log ("t");
  }
}
function arriba()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura de imagen del bloque = " + block_image_height);
		console.log("Cuando la tecla hacia arriba es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		actualización_jugador
	();
	}
}

function abajo()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura de imagen del bloque = " + block_image_height);
		console.log("Cuando la tecla hacia abajo es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		actualización_jugador
	();
	}
}

function izquierda()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("altura de imagen del bloque = " + block_image_width);
		console.log("Cuando la tecla hacia la izquierda es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		actualización_jugador
	();
	}
}

function derecha()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("altura de imagen del bloque = " + block_image_width);
		console.log("Cuando la tecla hacia la derecha es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		actualización_jugador
	();
	}
}
