//default
var tbUsuario = localStorage.getItem("tbUsuario");
tbUsuario = JSON.parse(tbUsuario); 
if(tbUsuario == null || tbUsuario == undefined){
  tbUsuario = [];
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
    if (usuario.firstname == usuarioInfo) {
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


function validaSenhas(senhaA, senhaB){
	return true;
}