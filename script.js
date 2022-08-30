function validaEntrada(args) {
	for (let i = 0; i < arguments.length; i++) {
		if (!!arguments[i] == false || arguments[i] < 0) {
			return false;
		}
	}
	return true;
}

function calcularIMC(kilos, altura) {
	altura = altura / 100;
	return (kilos / (altura * altura));
}

const formCalcularIMC = document.getElementById('form');

formCalcularIMC.addEventListener('submit', function(event) {
	event.preventDefault();

	const kilos = parseFloat(document.getElementById('kilos').value);
	const altura = parseFloat(document.getElementById('altura').value);

	if (validaEntrada(kilos, altura)) {
		const imc = calcularIMC(kilos, altura);
		document.getElementById('imc').value = parseInt(imc).toFixed(2);
	} else {
		document.getElementById('imc').value = "## ERRO ##";
	}
});
// Uma observção para deixar mais claro:
//Abaixo de 17        Muito abaixo do peso
//Entre 17 e 18,49    Abaixo do peso
//Entre 18,5 e 24,99  Peso normal
//Entre 25 e 29,99    Acima do peso
//Entre 30 e 34,99    Obesidade I
//Entre 35 e 39,99    Obesidade II
