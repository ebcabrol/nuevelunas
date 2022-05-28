const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#forumlario input');


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	telefono: /^.{4,12}$/, // 4 a 12 digitos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	consulta: /^[a-zA-ZÀ-ÿ\s]{1,300}$/, // Letras y espacios, pueden llevar acentos.
}

const campos = {
	nombre: false,
	apellido: false,
	mail: false, 
	telefono: false,
	consulta: false

}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "mail":
			validarCampo(expresiones.mail, e.target, 'mail');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		
		
	}
}

const validarCampo = (experesion, input, campo) => {
	if(expresiones.test(inout.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo}`).classList-add(fa-solid, fa-time-circle);
		document.querySelector(`#grupo__${campo}`).classList-remove(fa-solid, fa-circle-mark);
		document.querySelector(`#grupo__${campo} .formuylario__input-error`).classList.add('formulario__input-error-activo')
		campos[campo] = true
	} else {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo}`).classList-add(fa-time-circle);
		document.querySelector(`#grupo__${campo}`).classList-remove(fa-circle-mark);
		document.querySelector(`#grupo__${campo} .formuylario__input-error`).classList.remove('formulario__input-error-activo')
		campos[campo] = false 
	}

}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

