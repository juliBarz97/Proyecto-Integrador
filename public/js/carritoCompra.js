window.addEventListener("load" , function(){

        if (localStorage.getItem("nombre") && localStorage.getItem("precio")){
        let nombre = localStorage.getItem("nombre");
        let precio = localStorage.getItem("precio");
        document.querySelector(".nombreCarrito").innerHTML=nombre
        document.querySelector(".precioCarrito").innerHTML=precio



        }
})

var limpiar = document.getElementById('limpiar');

limpiar.addEventListener("click",function() { 
    localStorage.clear();
})