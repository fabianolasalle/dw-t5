var name;
var email;
var index = 0;

var name3;
var email3;
var existentContent3 = "";
var index3 = 0;

$(document).ready(function(){
	$("#name").click(function(){
		name = prompt("Seu nome");
	});

	$("#email").click(function(){
		email = prompt("Seu email");
	});

	$("#cadastrar").click(function(){
		var content = "Usuário número: " + index + "\n";
		content += "Nome: " + name + "\n";
		content += "E-mail: " + email + "\n";

		var existentContent = $("#area").val();
		$("#area").val(existentContent + "\n" + content);

		clearValues();
		index++;
	});

	$("#google-link").hover(function(){
		window.status = "Um Link";
	});

	var hoje = new Date();
	var dia = hoje.getDate();
	var mes = hoje.getMonth() + 1;
	var ano = hoje.getYear() + 1900;

	$("#date").html("Hoje: " + dia + "/" + mes + "/" + ano);

	//

	$("#name3").click(function(){
		name3 = prompt("Seu nome");
	});

	$("#email3").click(function(){
		email3 = prompt("Seu email");
	});

	$("#cadastrar3").click(function(){
		var content = "Usuário número: " + index3 + "\n";
		content += "Nome: " + name3 + "\n";
		content += "E-mail: " + email3 + "\n";


		existentContent3 = existentContent3 + "\n" + content;
		alert(existentContent3);

		clearValues3();
		index3++;
	});
});

function clearValues() {
	name = "";
	email = "";
}

function clearValues3() {
	name3 = "";
	email3 = "";
}