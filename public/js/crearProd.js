window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formCrear");

    formulario.addEventListener("submit", function(e){
       
        let erroresC = [];

        let campoNombreCrear = document.querySelector("input.nombreCrear");

        if(campoNombreCrear.value == "") {
            erroresC.push("El campo de nombre tiene que estar completo");

        }else if (campoNombreCrear.value.length < 3) {
            erroresC.push("El campo de nombre debe tener al menos 3 caracteres");
        }
        let campoPrecioCrear = document.querySelector("input.precioCrear");

        if(campoPrecioCrear.value == "") {
            erroresC.push("El campo de email tiene que estar completo");
        }

        let campoDescuentoCrear = document.querySelector("input.descuentoCR");

        if(campoDescuentoCrear.value == "") {
            erroresC.push("El campo de descuento tiene que estar completo");
    } 

    if (erroresC.length > 0) {
        e.preventDefault();
        let urlCR = document.querySelector("div.erroresCR ul")

        for (let i = 0; i < erroresC.length ; i ++){
            urlCR.innerHTML += "<li>" + erroresC[i] + "</li>"
        }
        
    alert("Por favor, ingrese bien la informacion")
}
});
})