window.addEventListener('load', () => {

	
	
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
	
		if (erroresL.length > 0){
			e.preventDefault();
			let textoL = "";
			for (let i = 0; i < erroresL.length; i++){
				textoL  += erroresL[i] + "\n";
			}
			alert(textoL)
		}
	
});


