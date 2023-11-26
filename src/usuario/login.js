//Login.js

function deslogar() {
	localStorage.removeItem("tbUsuarioLogado");
	console.log(localStorage.getItem("tbUsuarioLogado"));

}

function logar() {
	var usuarioInfo = document.getElementById("email").value;
	var senha = document.getElementById("password").value;
	localStorage.removeItem("tbUsuarioLogado");

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
          window.location.replace("https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-spotgrade/src/");
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
          window.location.replace("https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-spotgrade/src/");
	    }
	    return usuario;
	  }
	  return false;
	}
}