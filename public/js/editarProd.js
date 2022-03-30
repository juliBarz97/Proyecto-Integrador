window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formulario");

    formulario.addEventListener("submit", function(e){
        let errores = [];

        let campoNombreEd = document.querySelector("input.nombreEd");

        if(campoNombreEd.value == "") {
            errores.push("El campo de nombre tiene que estar completo");

        }else if (campoNombreEd.value.length < 3) {
            errores.push("El campo de nombre debe tener al menos 3 caracteres");
        }
        let campoPrecioEd = document.querySelector("input.precioEd");

        if(campoPrecioEd.value == "") {
            errores.push("El campo de email tiene que estar completo");
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
