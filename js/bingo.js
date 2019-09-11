// Variable globales
var usados = [];
var temporizadorId = 0;
var cargado = false;
var ultimo = 0;
var activo = 0;
var velocidad = 5000;

function buscaNumero()
{		
	numero = Math.round(Math.random()*(90-1)+1);
	
	while(usados[numero])
	{
		numero = Math.round(Math.random()*(90-1)+1);
	}
	
	ultimo ++;
	usados[numero] = 1;
	document.getElementById("n" + numero).src = "img/" + numero + ".png";
	document.getElementById("n0").src = "img/" + numero + ".png";
	document.getElementById("reproductor").src = "sonidos/" + numero + ".mp3";
	
	if (ultimo < 90 && activo == 1)
	{
		temporizadorId = setTimeout("buscaNumero()", velocidad);
	}
	else
	{
		clearTimeout(temporizadorId);
	}
}

function paraReinicia()
{
	
	for (i=0; ele=document.getElementsByName('optVel')[i]; i++)
	{
    	if (ele.checked == 1)
		{
			velocidad  = ele.value;
		}
	}
	
	if (activo == 1)
	{
		document.getElementById("btnParar").src = "img/iniciar.png";
		activo = 0;
		clearTimeout(temporizadorId);
	}
	else
	{
		document.getElementById("btnParar").src = "img/parar.png";
		activo = 1;
		temporizadorId = setTimeout("buscaNumero()", velocidad);
	}
}
