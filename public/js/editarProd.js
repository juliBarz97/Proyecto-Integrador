window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formEditar");

    formulario.addEventListener("submit", function(e){
        //e.preventDefault(); //cuando termino tengo que sacarlo
        let erroresE = [];

        let campoNombreEd = document.querySelector("input.nombreEd");

        if(campoNombreEd.value == "") {
            erroresE.push("El campo de nombre tiene que estar completo");

        }else if (campoNombreEd.value.length < 3) {
            erroresE.push("El campo de nombre debe tener al menos 3 caracteres");
        }
        let campoPrecioEd = document.querySelector("input.precioEd");

        if(campoPrecioEd.value == "") {
            erroresE.push("Ingrese el precio del producto");
    }
        
        if (erroresE.length > 0) {
            e.preventDefault();
            let urlEd = document.querySelector("div.erroresED ul")

            for (let i = 0; i < erroresE.length ; i ++){
                urlEd.innerHTML += "<li>" + erroresE[i] + "</li>"
            }
            
        alert("Por favor, ingrese bien la informacion")
    }
});
})
