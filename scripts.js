function resultado () {
	var num1 = document.querySelector("#real").value;
	var num2 = document.querySelector("#nominal").value;

	var resultado = (parseFloat(num1) / parseFloat(num2) - 1) * 100;
	document.querySelector("#resultado").innerHTML = "O Resultado é: " + resultado.toFixed(3) + "%";

	if (resultado < 4 && resultado > -4) {
		document.querySelector("#resultado").style.color = 'green';
	} else {
		document.querySelector("#resultado").style.color = 'red';
	}
}
