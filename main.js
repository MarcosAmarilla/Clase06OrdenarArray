// Generamos un array de Articulos y los ordenamos alfabeticamente o por precio 
// 

class Articulos {
    constructor (articulo, precio) {
        this.articulo = articulo;
        this.precio = precio;
    }
}

function cargarArticulos () {
    var confirmacion = true;
    const stock = [];
    do {
        let art = prompt("Ingrese el articulo: ");
        let pre = prompt("Ingrese el precio: ");
        const auxArticulo = new Articulos (art,pre);
        stock.push (auxArticulo);
        confirmacion = confirm("Quiere cargar otro Articulo?");
    } while (confirmacion);
    let opcion = prompt ("Seleccione el orden deseado: \n"+
    " 1 - Alfabeticamente por articulo \n"+
    " 2 - Precio de menor a mayor");
    if (opcion = "1") {
        stock.sort(function (a, b)  {
            if (a.articulo > b.articulo) {
                return 1;
            }
            if (a.articulo < b.articulo) {
                return -1;
            }
            else
                return 0;
        });
    }
    if (opcion = "2") {
        stock.sort(function (a, b) {
            if (a.precio > b.precio) {
                return 1;
            }
            if (a.precio < b.precio) {
                return -1;
            }
            else
                return 0;
        });
    }
    
    console.log(stock); //lo muestro en la consola porque no se mostrarlo por pantalla
        
} 

cargarArticulos();
