
let botonCarrito = document.getElementById("agregarCarrito");

botonCarrito.addEventListener("click",function(){

    

    let nombreProducto = document.querySelector("#nombreProducto").innerText;
    let precioProducto = document.querySelector("#precioProducto").innerText;
 

    console.log(nombreProducto)
    console.log(precioProducto)
    
    localStorage.setItem("nombre", nombreProducto)
    localStorage.setItem("precio", precioProducto)
    
    

})

