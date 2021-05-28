
let botonIniciar = document.getElementById("botonIniciar");
let marco = document.getElementById("superMercado");
let mostrarClientes = document.getElementById("mostrarClientes");
let mostrarClientes2 = document.getElementById("mostrarClientes2");
let mostrarClientes3 = document.getElementById("mostrarClientes3");
let divCaja1 = document.getElementById("caja1");
let divCaja2 = document.getElementById("caja2");
let divCaja3 = document.getElementById("caja3");
let divCaja4 = document.getElementById("caja4");
let subtitulo = document.getElementById("subtitulo");
let resultadoR = document.getElementById("resultadoR");
let resultadoG = document.getElementById("resultadoG");
let colaG = document.getElementById("colaG");
let colaR = document.getElementById("colaR");

// variables temporales

let caja1 = true;
let caja2 = true;
let caja3 = true;
let caja4 = true;

const horas2 = prompt("Numero de horas");
const numeroHoras = Number(horas2);
console.log(numeroHoras)


// Tiempo:
const tiempoProducto = 20 / numeroHoras; // en este momento esta en 20 
const tiempoAnimacion = 150 / numeroHoras; // estaba en 200
const tiempoEntrePersonas = 200 / (numeroHoras * 0.9); //0.9 - 200


// const numeroClientesG = 30;
const numeroClientesG = Math.floor(Math.random() * (110 - 80)) + 80; // media 95 clientes por hora
const clientesTotalesG = numeroHoras * numeroClientesG;
let vectorLlegada = [];
let vectorProductos = [];
const mediaLlegada = 6.5; // estaba en 6
const maxProductos = 100;
const min = 11;
for (let i = 0; i < clientesTotalesG; i++) {
    vectorLlegada[i] = Math.floor(Math.random() * mediaLlegada);
    vectorProductos[i] = Math.floor(Math.random() * (maxProductos - min)) + min;
}

// cola rapida

// rango 23 - 14
const restaR = Math.floor(Math.random() * (32 - 28)) + 28
const numeroClientesR = numeroClientesG - restaR;
const clientesTotalesR = numeroHoras * numeroClientesR;
let vectorLlegadaR = []
let vectorProductosR = []
const mediaLlegadaR = 9; // estaba en 7
for (let i = 0; i < clientesTotalesR; i++) {
    vectorLlegadaR[i] = Math.floor(Math.random() * mediaLlegadaR);
    vectorProductosR[i] = Math.floor(Math.random() * (11 - 1)) + 1;
}


// ESTO esta de mientras
// subtitulo.innerHTML = vectorLlegadaR
console.log(vectorProductos)
console.log(vectorLlegada)
console.log(vectorProductosR)
console.log(vectorLlegadaR)
console.log("tiempo: ",tiempoProducto, "  -  ", tiempoAnimacion, "  -  " , tiempoEntrePersonas)


const presionarBoton = () => {
    
    llegadaClientes();
    llegadaClientesR();
    colaGeneral();
    colaRapida()

};

const resolveAfterxSeconds = (x, i) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(vectorProductos[i]);
        }, x * tiempoEntrePersonas);
    });
}

const resolveRapida = (x, i) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(vectorProductosR[i]);
        }, x * tiempoEntrePersonas);
    });
}



const promesa2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}


var TiempoLlegadaG = [];
var TiempoSalidaG = [];
var TiempoLlegadaR = [];
var TiempoSalidaR = [];


const colaGeneral = async () => {
    let cont = 0;
    for (const element of vectorLlegada) {
        let numProduct = await resolveAfterxSeconds(element, cont);        
        mostrarClientes2.innerHTML += `<div class="clientesCola">${numProduct}</div>`;          
        let llegadaCliente = Date.now(); 
        TiempoLlegadaG[cont] = llegadaCliente;                  
        cont++;
    }
}

const colaRapida = async () => {
    let cont = 0;
    for (const element of vectorLlegadaR) {
        let numProduct = await resolveRapida(element, cont);
        mostrarClientes3.innerHTML += `<div class="clientesCola">${numProduct}</div>`;         
        let llegadaCliente = Date.now(); 
        TiempoLlegadaR[cont] = llegadaCliente;                     
        cont++;
    }
}






const llegadaClientes = async () => {
    let cont = 0;
    for (const element of vectorLlegada) {
        let numProduct = await resolveAfterxSeconds(element, cont);

        let seguir = true;
        // console.log("cont", cont, "producto", numProduct)

        while (seguir == true) {

            // CAJA GENERAL

            if (caja1) {

                seguir = false;
                caja1 = false;


                setTimeout(() => {
                    mostrarClientes2.childNodes[0].remove();
                    divCaja1.innerHTML = `<div class="cliente">${numProduct}</div>`;
                }, tiempoAnimacion)

                // esperar el tiempo del mercado
                let timeCaja = numProduct * tiempoProducto

                let salidaCliente = Date.now();
                TiempoSalidaG[cont] = salidaCliente;                                    

                setTimeout(() => {
                }, timeCaja + tiempoAnimacion)

                // salida de cliente
                setTimeout(() => {
                    divCaja1.innerHTML = '';
                    caja1 = true;                                                            
                }, timeCaja + (tiempoAnimacion*2))  // estaba /2



            } else if (caja2) {
                seguir = false;
                caja2 = false;
                setTimeout(() => {
                    mostrarClientes2.childNodes[0].remove();
                    divCaja2.innerHTML = `<div class="cliente">${numProduct}</div>`;
                }, tiempoAnimacion)

                // esperar el tiempo del mercado
                let timeCaja = numProduct * tiempoProducto                

                let salidaCliente = Date.now();
                TiempoSalidaG[cont] = salidaCliente;

                setTimeout(() => {
                }, timeCaja + tiempoAnimacion)

                setTimeout(() => {
                    divCaja2.innerHTML = '';
                    caja2 = true;                    
                }, timeCaja + (tiempoAnimacion*2))


            } else if (caja3) {

                seguir = false;
                caja3 = false;
                setTimeout(() => {
                    mostrarClientes2.childNodes[0].remove();
                    divCaja3.innerHTML = `<div class="cliente">${numProduct}</div>`;
                }, tiempoAnimacion)

                // esperar el tiempo del mercado
                let timeCaja = numProduct * tiempoProducto                

                let salidaCliente = Date.now();
                TiempoSalidaG[cont] = salidaCliente;

                setTimeout(() => {
                }, timeCaja + tiempoAnimacion)

                setTimeout(() => {
                    divCaja3.innerHTML = '';
                    caja3 = true;                    
                }, timeCaja + (tiempoAnimacion*2))

            } else {
                await promesa2();
                seguir = true;
            }


        }
        cont++;
        if(cont == numeroClientesG){
            resultado();
        }
    };
}


const llegadaClientesR = async () => {
    let cont = 0;
    for (const element of vectorLlegadaR) {
        let numProduct = await resolveRapida(element, cont);

        let seguir = true;
        console.log("cont", cont, "producto", numProduct)

        while (seguir == true) {

            // CAJA RAPIDA


            if (caja4) {

                seguir = false;
                caja4 = false;
                setTimeout(() => {
                    mostrarClientes3.childNodes[0].remove();
                    divCaja4.innerHTML = `<div class="cliente">${numProduct}</div>`;
                }, tiempoAnimacion)

                // esperar el tiempo del mercado
                let timeCaja = numProduct * tiempoProducto  
                
                let salidaCliente = Date.now();
                TiempoSalidaR[cont] = salidaCliente; 

                setTimeout(() => {
                }, timeCaja + tiempoAnimacion)

                setTimeout(() => {
                    divCaja4.innerHTML = '';
                    caja4 = true;                    
                }, timeCaja + (tiempoAnimacion*2))


            } else {
                await promesa2();
                seguir = true;
            }

        }


        cont++;

    };
}

const resultado = ()=>{
    resultadoR.innerHTML += numeroClientesR;
    resultadoG.innerHTML += numeroClientesG;
    
    let suma = 0
    for (let i = 0; i < TiempoLlegadaG.length; i++) {        
        suma += (TiempoSalidaG[i] - TiempoLlegadaG[i])
    }
    suma = suma / TiempoLlegadaG.length;


    let suma2 = 0
    for (let i = 0; i < TiempoLlegadaR.length; i++) {        
        console.log(i,". ",TiempoSalidaR[i] , " - ", TiempoLlegadaR[i])        
        suma2 += (TiempoSalidaR[i] - TiempoLlegadaR[i])
    }
    suma2 = suma2 / TiempoLlegadaR.length;

    console.log("suma", suma,"   " ,suma2)

    colaG.innerHTML += `${suma/1000} minutos`;
    colaR.innerHTML += `${suma2/1000} minutos`;


    console.log("promedio",suma)
    console.log("promedio2",suma2)
    // console.log("tsg",TiempoSalidaG)
    // console.log("tlg",TiempoLlegadaG)
    // console.log(TiempoSalidaR)
    // console.log(TiempoLlegadaR)
}



botonIniciar.onclick = () => {
    presionarBoton();
};

