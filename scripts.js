function resultado () {
	var num1 = document.querySelector("#real").value;
	var num2 = document.querySelector("#nominal").value;

	var num1Novo = num1.replace(/,/g, '.');
	var num2Novo = num2.replace(/,/g, '.');
	
	if (num1Novo == false && num2Novo == false) {
		document.querySelector("#resultado").style.color = 'yellow';
		document.querySelector("#resultado").style.fontSize = '15px';
		document.querySelector("#resultado").innerHTML = "Digite a resistência Nominal e a Real";
	}else if (num2Novo == false) {
		document.querySelector("#resultado").style.color = 'yellow';
		document.querySelector("#resultado").style.fontSize = '15px';
		document.querySelector("#resultado").innerHTML = "Digite a resistência Nominal";
	}else if (num1Novo == false) {
		document.querySelector("#resultado").style.color = 'yellow';
		document.querySelector("#resultado").style.fontSize = '15px';
		document.querySelector("#resultado").innerHTML = "Digite a resistência Real";
	}else {
		var resultado = (parseFloat(num1Novo) / parseFloat(num2Novo) - 1) * 100;
		document.querySelector("#resultado").style.fontSize = '20px';
		document.querySelector("#resultado").innerHTML = "O Resultado é: " + resultado.toFixed(2) + "%";
	
	

	if (resultado <= 4.01 && resultado >= -4.01) {
		document.querySelector("#resultado").style.color = '#00f700';
		document.querySelector("#msgResponsavel").innerHTML = '';

	} else if (resultado <= 6.5 && resultado >= -6.5) {
		document.querySelector("#resultado").style.color = 'yellow';
		document.querySelector("#msgResponsavel").innerHTML = 'A máquina poderá trabalhar mas terá um risco de reprovar a peça.';
		document.querySelector("#informeResponsavel").innerHTML = 'Informe o responsável';
	} else {
		document.querySelector("#resultado").style.color = '#c31212';
		document.querySelector("#msgResponsavel").style.fontSize = '15px';
		document.querySelector("#msgResponsavel").innerHTML = 'Fora do especificado';
	}
	}
	console.log(resultado);
}
