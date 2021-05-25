
let botonIniciar = document.getElementById("botonIniciar");
let marco = document.getElementById("superMercado");
let mostrarClientes = document.getElementById("mostrarClientes");
let mostrarClientes2 = document.getElementById("mostrarClientes2");
let horas = document.getElementById("horas");
let divCaja1 = document.getElementById("caja1");
let divCaja2 = document.getElementById("caja2");
let divCaja3 = document.getElementById("caja3");
let divCaja4 = document.getElementById("caja4");
let subtitulo = document.getElementById("subtitulo");

// variables temporales

let caja1 = true;
let caja2 = true;
let caja3 = true;
let caja4 = true;


// vector de tiempo de llegada
const numeroHoras = Number(horas.value);    
const numeroClientes = Math.floor(Math.random() * (110 - 70)) + 70; // media 90 clientes por hora
const clientesTotales = numeroHoras * numeroClientes;
let vectorLlegada = []
let vectorProductos = []
const mediaLlegada = 5;
const tiempoProducto = 50; // en este momento esta en 50    
const min = 1;
for (let i = 0; i < clientesTotales; i++) {
    vectorLlegada[i] = Math.floor(Math.random() * mediaLlegada);
    vectorProductos[i] = Math.floor(Math.random() * (clientesTotales - min)) + min;
}

subtitulo.innerHTML = vectorProductos;


const presionarBoton = () => {
    console.log(vectorProductos)
    console.log(vectorLlegada)   
    llegadaClientes();
    llegadaClientes2();
    
};

const resolveAfterxSeconds = (x,i) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(vectorProductos[i]);
        }, x * 500);
    });
}

const promesa2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {            
            resolve();
        },100);
    });
}

const llegadaClientes2 = async() => {
    let cont = 0;    
    for(const element of vectorLlegada) {
        let numProduct = await resolveAfterxSeconds(element, cont);
        // let backupMostrarCliente = mostrarClientes.innerHTML;        
        mostrarClientes2.innerHTML += `<div class="clientesCola">${numProduct}</div>`        
        cont++;
    }
}     





const llegadaClientes = async() => {
    let cont = 0;    
    for(const element of vectorLlegada) {
        let numProduct = await resolveAfterxSeconds(element, cont);
        
        let seguir = true;    

        // ELIMINAR
        // let backupMostrarCliente = mostrarClientes.innerHTML;        
        // mostrarClientes.innerHTML += `<div class="clientesCola">${numProduct}</div>`        
        

        while (seguir == true) {            

            if (numProduct > 10) {

                // CAJA GENERAL
    
                if (caja1) {

                    seguir = false;
                    caja1 = false; 
                    // console.log("contador" , cont)
                    // console.log("padre", mostrarClientes.innerHTML);
                    // // console.log("hijo i", mostrarClientes.children[0]);
                    // console.log("hijo nodes", mostrarClientes.childNodes[0]);
                    
                    // // mostrarClientes.removeChild(cont);
                    // // mostrarClientes.firstChild.remove();
                    // console.log("padre2", mostrarClientes.innerHTML)
                    
                    setTimeout(() =>{
                        // mostrarClientes.innerHTML = backupMostrarCliente; 
                        // mostrarClientes.innerHTML = ''; 
                        mostrarClientes2.childNodes[0].remove();
                        divCaja1.innerHTML = `<div class="cliente">${numProduct}</div>`;                    
                    }, 250)
                    
                    // esperar el tiempo del mercado
                    let timeCaja = numProduct * tiempoProducto
                    console.log("timeCaja",timeCaja)                  
    
                    setTimeout(()=>{                        
                    }, timeCaja + 250)
    
                    setTimeout(()=>{
                        divCaja1.innerHTML = '';
                        caja1 = true;
                    }, timeCaja + 500)

                    
                    
                }else if (caja2){
                    seguir = false;
                    caja2 = false;      
                    setTimeout(() =>{
                        // mostrarClientes.innerHTML = backupMostrarCliente; 
                        // mostrarClientes.innerHTML = ''; 
                        mostrarClientes2.childNodes[0].remove();
                        divCaja2.innerHTML = `<div class="cliente">${numProduct}</div>`;                    
                    }, 250)
                    
                    // esperar el tiempo del mercado
                    let timeCaja = numProduct * tiempoProducto
                    console.log("timeCaja",timeCaja)                  
    
                    setTimeout(()=>{                        
                    }, timeCaja + 250)
    
                    setTimeout(()=>{
                        divCaja2.innerHTML = '';
                        caja2 = true;
                    }, timeCaja + 500)
                    
    
                }else if (caja3){

                    seguir = false;
                    caja3 = false;      
                    setTimeout(() =>{
                        // mostrarClientes.innerHTML = backupMostrarCliente; 
                        // mostrarClientes.innerHTML = ''; 
                        mostrarClientes2.childNodes[0].remove();
                        divCaja3.innerHTML = `<div class="cliente">${numProduct}</div>`;                    
                    }, 250)
                    
                    // esperar el tiempo del mercado
                    let timeCaja = numProduct * tiempoProducto
                    console.log("timeCaja",timeCaja)                  
    
                    setTimeout(()=>{                        
                    }, timeCaja + 250)
    
                    setTimeout(()=>{
                        divCaja3.innerHTML = '';
                        caja3 = true;
                    }, timeCaja + 500)
                    
                }else{
                    await promesa2();
                    seguir = true;    
                }   
    
                
            }else{
    
                // CAJA RAPIDA
    
                if (caja4) {

                    seguir = false;
                    caja4 = false;      
                    setTimeout(() =>{
                        // mostrarClientes.innerHTML = backupMostrarCliente; 
                        // mostrarClientes.innerHTML = ''; 
                        mostrarClientes2.childNodes[0].remove();
                        divCaja4.innerHTML = `<div class="cliente">${numProduct}</div>`;                    
                    }, 250)
                    
                    // esperar el tiempo del mercado
                    let timeCaja = numProduct * tiempoProducto
                    console.log("timeCaja",timeCaja)                  
    
                    setTimeout(()=>{
                        console.log(numProduct)
                    }, timeCaja + 250)
    
                    setTimeout(()=>{
                        divCaja4.innerHTML = '';
                        caja4 = true;
                    }, timeCaja + 500)
                    
                    
                }else{
                    await promesa2();
                    seguir = true;                    
                }
            
            }   
        }

    

        cont++;

    };
}


botonIniciar.onclick = () => {
    presionarBoton();
};

