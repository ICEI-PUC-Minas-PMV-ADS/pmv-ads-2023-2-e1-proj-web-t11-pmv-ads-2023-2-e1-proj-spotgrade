//cadastro.js

//Começa carregando a pagina e já desligando todas as opções
desligaTodasOpcoes();

function mostraOpcoes(opcaoSelecionada) {
	switch(opcaoSelecionada){
	case "Bar":
		desligaTodasOpcoes();
		ligaOpcoesBar();
		break;
	case "Restaurante":
		desligaTodasOpcoes();
		ligaOpcoesRestaurante();
		break;
	case "Teatro / Cinema":
		desligaTodasOpcoes();
		ligaOpcoesTeatrocinema();
		break;
	case "Hotel":
		desligaTodasOpcoes();
		ligaOpcoesHotel();
		break;
	case "Shopping":
		desligaTodasOpcoes();
		ligaOpcoesShopping();
		break;
	}
}

function desligaTodasOpcoes() {
	var campos = document.getElementsByClassName('checkOpcaoEstab');
	for (var i = 0; i < campos.length; i++) {
	   campos.item(i).classList.add('d-none');
	}
}

function ligaOpcoesBar() {
	document.getElementById("containerItemcerveja").classList.remove('d-none');
	document.getElementById("containerItemrecreacao").classList.remove('d-none');
	document.getElementById("containerItemLocalidade").classList.remove('d-none');
	document.getElementById("containerItemAtendimento").classList.remove('d-none');
	document.getElementById("containerItemPreco").classList.remove('d-none');
}

function ligaOpcoesRestaurante() {
	document.getElementById("containerItemTempoPreparo").classList.remove('d-none');
	document.getElementById("containerItemrecreacao").classList.remove('d-none');
	document.getElementById("containerItemLocalidade").classList.remove('d-none');
	document.getElementById("containerItemAtendimento").classList.remove('d-none');
	document.getElementById("containerItemPreco").classList.remove('d-none');
}

function ligaOpcoesTeatrocinema() {
	document.getElementById("containerItemVisibilidade").classList.remove('d-none');
	document.getElementById("containerItemLocalidade").classList.remove('d-none');
	document.getElementById("containerItemAtendimento").classList.remove('d-none');
	document.getElementById("containerItemPreco").classList.remove('d-none');
}

function ligaOpcoesHotel() {
	document.getElementById("containerItemLocalidade").classList.remove('d-none');
	document.getElementById("containerItemAtendimento").classList.remove('d-none');
	document.getElementById("containerItemPreco").classList.remove('d-none');
}

function ligaOpcoesShopping() {
	document.getElementById("containerItemEstacionamento").classList.remove('d-none');
	document.getElementById("containerItemAlimentacao").classList.remove('d-none');
	document.getElementById("containerItemLocalidade").classList.remove('d-none');
	document.getElementById("containerItemAtendimento").classList.remove('d-none');
	document.getElementById("containerItemPreco").classList.remove('d-none');
}

function cadastraEstabelecimento(form) {
	// body...
	// console.log(form);
	var estabelecimento = [];

	for (var i = form.length - 1; i >= 0; i--) {
		console.log(form[i]);
		console.log(form[i].name);
		console.log(form[i].value);
		estabelecimento[form[i].name] = form[i].value;
	}
	
	console.log(estabelecimento);

	var imgPath = document.querySelector("input[type=file]").files[0]; //('#inputGroupFile02');
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
          // convert image file to base64 string and save to localStorage
          localStorage.setItem("image", reader.result);
        },
        false
    );
    localStorage.removeItem("image");
    if (imgPath) {
      reader.readAsDataURL(imgPath);
    }

    // finalPath = {imgPath : localStorage.getItem("image")};
    document.getElementById('exampleModalLive').classList.remove('d-none');
  	
  	setTimeout(() => { 
        estabelecimento.push({'imgPath':localStorage.getItem("image")});
        // localStorage.getItem("image")
		var cadastro = AdicionarEstabelecimento(estabelecimento);
  		console.log(estabelecimento);
		if (cadastro){
			window.location.replace("../index.html");
		}
    }, 5000);
	

}