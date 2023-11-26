
switch(window.location.pathname){
	case '/estabelecimento/lista_bares.html':
		listarEstabelecimmentosCustom('Bar');
		break;
	case '/estabelecimento/lista_restaurantes.html':
		listarEstabelecimmentosCustom('Restaurante');
		break;
	case '/estabelecimento/lista_teatrocinema.html':
		listarEstabelecimmentosCustom('Teatro / Cinema');
		break;
	case '/estabelecimento/lista_hotel.html':
		listarEstabelecimmentosCustom('Hotel');
		break;
	case '/estabelecimento/lista_shopping.html':
		listarEstabelecimmentosCustom('Shopping');
		break;
}
