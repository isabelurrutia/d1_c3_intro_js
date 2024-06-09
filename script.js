precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidad = 0;

function agrega_uno(){
    cantidad = cantidad + 1;
    document.querySelector("#cantidad").innerHTML =  cantidad;
    total = cantidad * precio;
    document.querySelector(".valor-total").innerHTML = total;
}

function resta_uno(){
    if(cantidad>0){
        cantidad = cantidad - 1;
        document.querySelector("#cantidad").innerHTML =  cantidad;
        total = cantidad * precio;
        document.querySelector(".valor-total").innerHTML = total;
    }
}