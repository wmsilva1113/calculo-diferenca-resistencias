function resultado () {
	var num1 = document.querySelector("#real").value;
	var num2 = document.querySelector("#nominal").value;

	var num1Novo = num1.replace(/,/g, '.');
	var num2Novo = num2.replace(/,/g, '.');
	

	var resultado = (parseFloat(num1Novo) / parseFloat(num2Novo) - 1) * 100;
	document.querySelector("#resultado").innerHTML = "O Resultado é: " + resultado.toFixed(2) + "%";



	if (resultado <= 4.01 && resultado >= -4.01) {
		document.querySelector("#resultado").style.color = '#00f700';
		document.querySelector("#msgResponsavel").innerHTML = '';

	} else {
		document.querySelector("#resultado").style.color = '#c31212';
		document.querySelector("#msgResponsavel").style.fontSize = '20px';
		document.querySelector("#msgResponsavel").innerHTML = 'Chame o responsável';
	}
	console.log(resultado);
}
