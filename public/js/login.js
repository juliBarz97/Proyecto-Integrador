window.addEventListener("load", () => {

	let formL = document.querySelector('formLogin')
	formL.addEventListener('submit', function(e){
		let erroresL = []
		
		let campoEmailLogin = document.querySelector("input.emailL");

		if (campoEmailLogin.value == ""){
			erroresL.push("Escriba su email para loguearse")
		}

		let campoPasswordLogin = document.querySelector("input.passL");

		if (campoPasswordLogin.value == ""){
			erroresL.push("Escriba su contraseña")
		}

	})
	
	if (erroresL.length > 0) {
		e.preventDefault();
		let urlLG = document.querySelector("div.erroresLG ul")
	
		for (let i = 0; i < erroresL.length ; i ++){
			urlLG.innerHTML += "<li>" + erroresL[i] + "</li>"
		}
		
	alert("Por favor, ingrese bien la informacion")
	}
	
});


