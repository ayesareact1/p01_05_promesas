// Manejo de asincronía con promesas

// Declaración de una función que devuelve una promesa

let users = ['Juan Pérez', 'Lucía Gómez', 'Carlos López'];

const getUser = (posicion) => { 
    return new Promise((resolve, reject) => { // Definimos en resolve la lógica de la petición
        if(posicion < 0 || posicion >= users.length) { // y en reject la lógica en caso de errores
            reject({mensaje: 'Posicion no válida'});
        }
        setTimeout(() =>{ // simula la asincronía de esta construcción
            resolve({user: users[posicion]});
        }, 2500);  
       
    })
}

// Implementación de la promesa
// exige utilizar la sintaxis con métodos then() y catch() para resolverla

getUser(1)
    .then(data => { // Cuando se recibe la ejecución correcta (resolve) se ejecuta esta callback
        console.log(data);
        return data.user;
    })
    .then(data => { // Los then se pueden encadenar para generar un pipe
        console.log('Hola ' + data);
    })
    .catch(error => { // Cuando se recibe la ejecución incorrecta (reject) se ejecuta esta callback
        console.log(error);
    })