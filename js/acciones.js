// JavaScript Document
var ID_Usuario="";
function loginConectar(U,P)
{
	alert(U);
		alert(P);
	datos= "usuario="+U+"&password="+P;
	$.ajax({
		type:"POST",
		url:"http://192.168.1.174/Sitio6/Log_in_m.php",
		data: datos,
	}).done(function(msg){
		alert(msg);
		if(msg==""|| msg==null)
		{ alert ("usuario incorrecto");}
		else
		
		{
			var OUsuario=jQuery.parseJSON(msg);
			ID_Usuario=OUsuario.Usuario;
			alert("Bienvenido "+ ID_Usuario);
			location.href="#Busqueda";
			
			}
	});
}
$(document).ready (function (e) {
	document.addEventListener("deviceready", function(){
		$('.Enviar').tap(function(){
			alert ("dentro");
			var formulario= $(this).parents('form');
			var usuario = document.getElementById('Usuario').value;
				alert (usuario);
			var password = document.getElementById('Password').value;
			alert (password);
			loginConectar(usuario,password);
		});
		
	});
   });
