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

function cadastraUsuario(form) {
	// body...
	var usuario = [];

	for (var i = form.length - 1; i >= 0; i--) {
		console.log(form[i]);
		console.log(form[i].name);
		console.log(form[i].value);
		usuario[form[i].name] = form[i].value;
	}
	
	console.log(usuario);

	AdicionarUsuario(usuario);
	
	return false;

}