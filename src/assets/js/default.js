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



function validaSenhas(senhaA, senhaB){
	return true;
}