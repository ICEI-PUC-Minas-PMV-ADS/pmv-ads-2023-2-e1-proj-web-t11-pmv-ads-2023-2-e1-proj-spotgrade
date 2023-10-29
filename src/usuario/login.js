//Login.js

function logar() {
	var usuarioInfo = document.getElementById("email").value;
	var senha = document.getElementById("password").value;

	console.log(usuarioInfo, senha);

	for (var i = tbUsuario.length - 1; i >= 0; i--) {
	  var usuario = JSON.parse(tbUsuario[i]);
	  console.log(usuario);
	  if (usuario.nome == usuarioInfo) {
	    console.log("usuario encontrado");
	    console.log(usuario.senha);
	    if (usuario.senha == senha) {
	    	console.log("usuario logado");
	    	tbUsuarioLogado.push(usuario);
	    	localStorage.setItem("tbUsuarioLogado", JSON.stringify(tbUsuarioLogado));
	    	console.log(tbUsuarioLogado);
          window.location.replace("../index.html");
	    }
	    return usuario;
	  }
	  if (usuario.email == usuarioInfo) {
	    console.log("usuario encontrado");
	    console.log(usuario.senha);
	    if (usuario.senha == senha) {
	    	console.log("usuario logado");
	    	tbUsuarioLogado.push(usuario);
	    	localStorage.setItem("tbUsuarioLogado", JSON.stringify(tbUsuarioLogado));
	    	console.log(tbUsuarioLogado);
          window.location.replace("../index.html");
	    }
	    return usuario;
	  }
	  return false;
	}
}