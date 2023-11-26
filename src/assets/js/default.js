//default
var tbUsuario = localStorage.getItem("tbUsuario");
tbUsuario = JSON.parse(tbUsuario);
console.log(tbUsuario); 
if(tbUsuario == null || tbUsuario == undefined){
  tbUsuario = [];
}

var tbEstabelecimento = localStorage.getItem("tbEstabelecimento");
tbEstabelecimento = JSON.parse(tbEstabelecimento);
// console.log(tbEstabelecimento); 
if(tbEstabelecimento == null || tbEstabelecimento == undefined){
  tbEstabelecimento = [];
}

var tbUsuarioLogado = localStorage.getItem("tbUsuarioLogado");
tbUsuarioLogado = JSON.parse(tbUsuarioLogado);
if(tbUsuarioLogado == null || tbUsuarioLogado == undefined){
  tbUsuarioLogado = [];
}
// localStorage.removeItem("tbUsuarioLogado");
// console.log(tbUsuarioLogado);
for (var i = tbUsuarioLogado.length - 1; i >= 0; i--) {
  console.log(tbUsuarioLogado[i]);
}
var todosItens = document.getElementsByClassName("apenas-logado");
for (var i = todosItens.length - 1; i >= 0; i--) {
  // console.log(todosItens[i]);
  todosItens.item(i).classList.add('d-none');
}
if (Array.isArray(tbUsuarioLogado) && tbUsuarioLogado[0].nome != null) { document.getElementById("nomeUsuario").textContent = "Bem vindo: " + tbUsuarioLogado[0].nome + " | " + tbUsuarioLogado[0].tipo + "";}
if (Array.isArray(tbUsuarioLogado) && tbUsuarioLogado[0].nome != null) { 
  for (var i = todosItens.length - 1; i >= 0; i--) {
    // console.log(todosItens[i]);
    todosItens.item(i).classList.remove('d-none');
  }
}


//CRUD
function AdicionarUsuario(usuario){
  console.log(usuario);
  var novoUsuario = JSON.stringify({
    nome : usuario['inputName'],
    email     : usuario['inputEmail'],
    telefone       : usuario['inputTelefone'],
    tipo    : usuario['tipoUsuario'],
    endereco    : usuario['inputRua'],
    numero    : usuario['inputNumero'],
    complement    : usuario['inputComplemento'],
    bairro    : usuario['inputBairro'],
    cidade    : usuario['inputCidade'],
    estado    : usuario['inputEstado'],
    CEP       : usuario['inputCEP'],
    senha  : usuario['inputPassword'],
    confirmaSenha  : usuario['inputConfirmPassword'],
  });

  if( !validaSenhas(usuario['senha'],usuario['confirmaSenha']) ){
    console.log("senhas : " + false);
    return;

  }

  console.log(novoUsuario);
  tbUsuario.push(novoUsuario);
  localStorage.setItem("tbUsuario", JSON.stringify(tbUsuario));
  console.log("Usuario adicionado.");
  return true;
}

function RecuperarUsuario(usuarioInfo){
  for (var i = tbUsuario.length - 1; i >= 0; i--) {
    var usuario = JSON.parse(tbUsuario[i]);
    console.log(usuario);
    if (usuario.nome == usuarioInfo) {
      console.log("usuario encontrado");
      return usuario;
    }
    if (usuario.email == usuarioInfo) {
      console.log("usuario encontrado");
      return usuario;
    }
    return false;
  }

}

function Editar(){
  var indice;
  for (var i = tbUsuario.length - 1; i >= 0; i--) {
    var usuario = JSON.parse(tbUsuario[i]);
    console.log(usuario);
    if (usuario.firstname == usuarioLogado.firstname) {
      console.log("usuario encontrado");
      indice=i;
    }
    if (usuario.email == usuarioLogado.email) {
      console.log("usuario encontrado");
      indice=i;
    }
  }

  tbUsuario[indice] = JSON.stringify({
    firstname : document.getElementById('firstname').value,
    lastname  : document.getElementById('lastname').value,
    email     : document.getElementById('email').value,
    tel       : document.getElementById('tel').value,
    adress    : document.getElementById('adress').value,
    number    : document.getElementById('number').value,
    Bairro    : document.getElementById('Bairro').value,
    CEP       : document.getElementById('CEP').value,
    Cidade    : document.getElementById('Cidade').value,
    password  : document.getElementById('password').value,
    gender    : document.querySelector('input[name="gender"]:checked').value
    });//Altera o item selecionado na tabela
  
    if(validaSenhas()){
      console.log("senhas :" + false)
      return;

    }

  console.log(tbUsuario[indice]);
  //usuarioEditado = localStorage.setItem("tbUsuario", JSON.stringify(tbUsuario));
  console.log("Informações editadas.");
  localStorage.removeItem("tbUsuario");
  localStorage.setItem("tbUsuario", JSON.stringify(tbUsuario));
  localStorage.removeItem("usuarioLogado");
  localStorage.setItem("usuarioLogado", JSON.stringify(JSON.parse(tbUsuario[indice])));
  console.log(indice);
  
 
  //localStorage.removeItem();
  //localStorage.setItem("usuarioLogado",JSON.stringify(tbUsuario));
  // operacao = "A"; //Volta ao padrão
  return true;
}

function Excluir(indice_selecionado){
  tbUsuario.splice(indice_selecionado, 1);
  localStorage.setItem("tbUsuario", JSON.stringify(tbUsuario));
  console.log("Registro excluído.");
}


/* ------- estabelecimento ------- */

function AdicionarEstabelecimento(estabelecimento){
  // console.log(estabelecimento);
  var novoestabelecimento = JSON.stringify({
    nome : estabelecimento['inputName'],
    local     : estabelecimento['inputlocal'],
    tipoEstabelecimento       : estabelecimento['inputTipoEstabelecimento'],
    itemcerveja    : estabelecimento['inputItemcerveja'],
    itemTempoPreparo    : estabelecimento['inputItemTempoPreparo'],
    itemVisibilidade    : estabelecimento['inputItemVisibilidade'],
    itemEstacionamento    : estabelecimento['inputItemEstacionamento'],
    itemAlimentacao    : estabelecimento['inputItemAlimentacao'],
    itemrecreacao    : estabelecimento['inputItemrecreacao'],
    itemLocalidade    : estabelecimento['inputItemLocalidade'],
    itemAtendimento       : estabelecimento['inputItemAtendimento'],
    itemPreco  : estabelecimento['inputItemPreco'],
    imgPath: estabelecimento[0].imgPath
  });

  console.log(estabelecimento);
  tbEstabelecimento.push(novoestabelecimento);
  localStorage.setItem("tbEstabelecimento", JSON.stringify(tbEstabelecimento));
  console.log("Estabelecimento adicionado.");

  return true;
}

function listarEstabelecimmentos(){
  var estabelecimentos = JSON.parse(localStorage.getItem("tbEstabelecimento"));
  var htmlLista = '<div class="row py-5">';
  // console.log(estabelecimentos);
  for (var i = 0; i < estabelecimentos.length; i++) {
      // console.log(i+1);
    /*if (!((i+1) % 3)) {
      htmlLista += '<div class="row py-5">';
      console.log(i+1);
    }*/
    // console.log(estabelecimentos[i]);
    var estabelecimento = JSON.parse(estabelecimentos[i]);
    // console.log(estabelecimento);
    // console.log(estabelecimento.nome);
    // console.log(estabelecimento.local);
    // console.log(estabelecimento.tipoEstabelecimento);
    // console.log(estabelecimento.itemcerveja);
    // console.log(estabelecimento.itemTempoPreparo);
    // console.log(estabelecimento.itemVisibilidade);
    // console.log(estabelecimento.itemEstacionamento);
    // console.log(estabelecimento.itemAlimentacao);
    // console.log(estabelecimento.itemrecreacao);
    // console.log(estabelecimento.itemLocalidade);
    // console.log(estabelecimento.itemAtendimento);
    // console.log(estabelecimento.itemPreco);
    // console.log(estabelecimento.imgPath);

    htmlLista += '  <div class="col-4">';
    htmlLista += '    <div class="card w-100" style="width: 18rem;">';
    htmlLista += '      <img src="' + estabelecimento.imgPath + '" class="card-img-top" alt="...">';
    htmlLista += '      <div class="card-body">';
    htmlLista += '        <h5 class="card-title">' + estabelecimento.nome + '</h5>';
    htmlLista += '        <p class="card-text">' + estabelecimento.local + '</p>';
    htmlLista += '        <a href="#" class="btn btn-primary">Detalhes</a>';
    htmlLista += '      </div>';
    htmlLista += '    </div>';
    htmlLista += '  </div>';

    if (!((i+1) % 3)) {
      // console.log(i+1)
      htmlLista += '</div>';
      htmlLista += '<div class="row py-5">';
    }
  }

  // console.log(htmlLista);
  document.getElementById("listaIndex").innerHTML = htmlLista;

}


function listarEstabelecimmentosCustom(tipo){
  var estabelecimentos = JSON.parse(localStorage.getItem("tbEstabelecimento"));
  var htmlLista = '<div class="row py-5">';
  // console.log(estabelecimentos);
  for (var i = 0; i < estabelecimentos.length; i++) {
    var estabelecimento = JSON.parse(estabelecimentos[i]);
    if( estabelecimento.tipoEstabelecimento == tipo){
    
        htmlLista += '  <div class="col-4">';
        htmlLista += '    <div class="card w-100" style="width: 18rem;">';
        htmlLista += '      <img src="' + estabelecimento.imgPath + '" class="card-img-top" alt="...">';
        htmlLista += '      <div class="card-body">';
        htmlLista += '        <h5 class="card-title">' + estabelecimento.nome + '</h5>';
        htmlLista += '        <p class="card-text">' + estabelecimento.local + '</p>';
        htmlLista += '        <a href="#" class="btn btn-primary">Detalhes</a>';
        htmlLista += '      </div>';
        htmlLista += '    </div>';
        htmlLista += '  </div>';
    
        if (!((i+1) % 3)) {
          // console.log(i+1)
          htmlLista += '</div>';
          htmlLista += '<div class="row py-5">';
        }
    }
  }

  // console.log(htmlLista);
  document.getElementById("listaIndex").innerHTML = htmlLista;

}


function validaSenhas(senhaA, senhaB){
	return true;
}

