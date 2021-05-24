
let botonIniciar = document.getElementById("botonIniciar");
let marco = document.getElementById("superMercado");
let mostrarClientes = document.getElementById("mostrarClientes");
let divCaja1 = document.getElementById("caja1");
let divCaja2 = document.getElementById("caja2");
let divCaja3 = document.getElementById("caja3");
let divCaja4 = document.getElementById("caja4");

// variables temporales

let caja1 = true;
let caja2 = true;
let caja3 = true;
let caja4 = true;


// vector de tiempo de llegada
let vectorLlegada = []
let vectorProductos = []
const mediaLlegada = 2;
const tamano = 100;
const max = 100;
const min = 1;
for (let i = 0; i < tamano; i++) {
    vectorLlegada[i] = Math.floor(Math.random() * mediaLlegada);
    vectorProductos[i] = Math.floor(Math.random() * (max - min)) + min;
}

const presionarBoton = () => {
    
    console.log(vectorLlegada)
    console.log(vectorProductos)
    
    llegadaClientes();
    
};

const resolveAfterxSeconds = (x,i) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(vectorProductos[i]);
        }, x * 1000);
    });
}

const promesa2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("primero la promesa")
            resolve();
        },500);
    });
}



const llegadaClientes = async() => {
    let cont = 0;    
    for(const element of vectorLlegada) {
        let numProduct = await resolveAfterxSeconds(element, cont);
        let backupMostrarCliente = mostrarClientes.innerHTML;
        mostrarClientes.innerHTML += `<div class="clientesCola">${numProduct}</div>`        
        cont++;

        let seguir = true;    
        

        while (seguir == true) {

            console.log("entro")

            if (numProduct > 10) {

                // CAJA GENERAL
    
                if (caja1) {

                    seguir = false;
                    caja1 = false;      
                    setTimeout(() =>{
                        mostrarClientes.innerHTML = backupMostrarCliente; 
                        // mostrarClientes.innerHTML = ''; 
                        divCaja1.innerHTML = `<div class="cliente">${numProduct}</div>`;                    
                    }, 1000)
                    
                    // esperar el tiempo del mercado
                    let timeCaja = numProduct * 100
                    console.log("timeCaja",timeCaja)                  
    
                    setTimeout(()=>{
                        console.log(numProduct)
                    }, timeCaja + 1000)
    
                    setTimeout(()=>{
                        divCaja1.innerHTML = '';
                        caja1 = true;
                    }, timeCaja + 2000)

                    
                    
                }else if (caja2){
                    seguir = false;
                    caja2 = false;      
                    setTimeout(() =>{
                        mostrarClientes.innerHTML = backupMostrarCliente; 
                        // mostrarClientes.innerHTML = ''; 
                        divCaja2.innerHTML = `<div class="cliente">${numProduct}</div>`;                    
                    }, 1000)
                    
                    // esperar el tiempo del mercado
                    let timeCaja = numProduct * 100
                    console.log("timeCaja",timeCaja)                  
    
                    setTimeout(()=>{
                        console.log(numProduct)
                    }, timeCaja + 1000)
    
                    setTimeout(()=>{
                        divCaja2.innerHTML = '';
                        caja2 = true;
                    }, timeCaja + 2000)
                    
    
                }else if (caja3){

                    seguir = false;
                    caja3 = false;      
                    setTimeout(() =>{
                        mostrarClientes.innerHTML = backupMostrarCliente; 
                        // mostrarClientes.innerHTML = ''; 
                        divCaja3.innerHTML = `<div class="cliente">${numProduct}</div>`;                    
                    }, 1000)
                    
                    // esperar el tiempo del mercado
                    let timeCaja = numProduct * 100
                    console.log("timeCaja",timeCaja)                  
    
                    setTimeout(()=>{
                        console.log(numProduct)
                    }, timeCaja + 1000)
    
                    setTimeout(()=>{
                        divCaja3.innerHTML = '';
                        caja3 = true;
                    }, timeCaja + 2000)
                    
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
                        mostrarClientes.innerHTML = backupMostrarCliente; 
                        // mostrarClientes.innerHTML = ''; 
                        divCaja4.innerHTML = `<div class="cliente">${numProduct}</div>`;                    
                    }, 1000)
                    
                    // esperar el tiempo del mercado
                    let timeCaja = numProduct * 100
                    console.log("timeCaja",timeCaja)                  
    
                    setTimeout(()=>{
                        console.log(numProduct)
                    }, timeCaja + 1000)
    
                    setTimeout(()=>{
                        divCaja4.innerHTML = '';
                        caja4 = true;
                    }, timeCaja + 2000)
                    
                    
                }else{
                    await promesa2();
                    seguir = true;
                    console.log("esta esperando");
                }
            
            }   
        }

    



    };
}


botonIniciar.onclick = () => {
    presionarBoton();
};

