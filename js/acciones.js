// JavaScript Document
function loginConectar(U,P)
{
	alert(U);
		alert(P);
	datos= "usuario="+U+"&password="+P;
	$.ajasx({
		type:"POST",
		url:"http://192.168.1.174/Sitio6/Log_in_m.php",
		data: datos,
	}).done(function(msg){
		alert(msg);
		if(msg==""|| msg==null)
		{ alert ("usuario incorrecto");}
		else
		{alert("Bienvenido");}
	});
}
$(document).ready (function (e) {
	document.addEventListener("deviceready", function(){
		$('.Enviar').tap(function(){
			alert ("dentro");
			var formulario= $(this).parents('form');
			var usuario = document.getElementByID('Usuario').value;
				alert (usuario);
			var password = document.getElementByID('Password').value;
			alert (password);
			loginConectar(usuario,password);
		});
		
	});
   });
