//cadastro.js

// getElementById

let radioSpoter = document.querySelector('#flexRadiotipoSpoter');
radioSpoter.addEventListener('click', function (event) {
	escondeEnderecos();
});

let radioDivulgador = document.querySelector('#flexRadiotipoDivulgador');
radioDivulgador.addEventListener('click', function (event) {
	exibeEnderecos();
});


function escondeEnderecos() {
	var campos = document.getElementsByClassName('row-endereco');
	for (var i = 0; i < campos.length; i++) {
	   console.log(campos.item(i));
	   campos.item(i).classList.add('d-none');
	   console.log(campos.item(i));
	}
}

function exibeEnderecos() {
	var campos = document.getElementsByClassName('row-endereco');
	for (var i = 0; i < campos.length; i++) {
	   console.log(campos.item(i));
	   campos.item(i).classList.remove('d-none');
	   console.log(campos.item(i));
	}
}