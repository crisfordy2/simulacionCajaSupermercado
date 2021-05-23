
let botonIniciar = document.getElementById("botonIniciar");
let marco = document.getElementById("superMercado");

const productos = () => {
    vector = []
    max = 100;
    min = 1;
    for (let i = 0; i < 100; i++) {
        vector[i] = Math.floor(Math.random() * (max - min)) + min;
    }
    return vector
}

const tiempoLlegada = () => {
    vector = []
    media = 5;
    for (let i = 0; i < 100; i++) {
        vector[i] = Math.floor(Math.random() * media);
    }
    return vector
}

const presionarBoton = () => {

    // console.log(productos())
    console.log(tiempoLlegada())
    
    llegadaClientes();
    
};

const resolveAfterxSeconds = (x) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, x * 500);
    });
}

const llegadaClientes = async() => {
    let t = tiempoLlegada();
    // for (let i = 0; i < t.length; i++) {
    //     console.log("llegada del vector", t[i] )        
    //     const result = await resolveAfterxSeconds(t[i]);
    //     console.log(result);
    // }    

    for(const element of t) {
        let result = await resolveAfterxSeconds(element);
        console.log(result);
    };
}


botonIniciar.onclick = () => {
    presionarBoton();
};

