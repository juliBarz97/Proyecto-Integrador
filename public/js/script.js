window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formulario");

    formulario.addEventListener("submit", function(e){
        
        let errores = [];

        let campoNombre = document.querySelector("input.nombrecompleto");

        if(campoNombre.value == "") {
            errores.push("El campo de nombre tiene que estar completo");

        }else if (campoNombre.value.length < 3) {
            errores.push("El campo de nombre debe tener al menos 3 caracteres");
        }
        let campoEmail = document.querySelector("input.email");

        if(campoEmail.value == "") {
            errores.push("El campo de email tiene que estar completo");
    }
    let campoFechaNacimiento = document.querySelector("input.fechanacimiento");

        if(campoFechaNacimiento.value == "") {
            errores.push("El campo fecha nacimiento tiene que estar completo");
    }

    if (errores.length > 0) {
        e.preventDefault();

        let texto = "";
        for (let i = 0; i <errores.length; i++) {
            texto  += errores[i] + "\n";
    } 
    alert(texto);
}
});
})

