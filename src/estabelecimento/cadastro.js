//cadastro.js

function cadastraEstabelecimento(form) {
	// body...
	var estabelecimento = [];

	for (var i = form.length - 1; i >= 0; i--) {
		console.log(form[i]);
		console.log(form[i].name);
		console.log(form[i].value);
		Estabelecimento[form[i].name] = form[i].value;
	}
	
	console.log(estabelecimento);

	AdicionarEstabelecimento(estabelecimento);
	
	return false;

}