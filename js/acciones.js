// JavaScript Document
function loginConectar(U,P)
{
	alert(U);
		alert(P);
	datos= "usuario="+U+"&password="+P;
	$.ajasx({
		type:"POST",
		url:"192.168.1.197/Sitio6/log_in_m.php",
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
			var usuario = document.getelementByID('Usuario').value;
			var password = document.getelementByID('Password').value;
			loginConectar(usuario,password);
		});
		
	});
   });
