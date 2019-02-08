

const initState = {  //aqui creamos el estado que queremos cambiar con nuestra infomaracion nueva recogida de la base de datos, ya no crearemos state dentro de componentes.
    cities: []
}



const cityReducer = (state = initState, action) => { //aqui creamos nuestro reducer, donde le vamos a crear el nuevo estado con la informacion de action que es donde diremos que lo que cambiamos o añadimos
   console.log(action.payload);
      if (action.type === "ALL_CITIES"){  //aqui hacemos un if donde diremos que si nuestro accion type es igual al que hemos puesto en nuestro accion nos devuelva toda la informacion
            return{
                cities: action.payload
            } //llenamos nuestro state vacio con la informacion de sacamos en el action.
        }
    
    
     //nuestro inicial state sera cambiado por mi action que creare en action.js y me devlvera el state con los datos que quiero.
    return state;
} 

export default cityReducer;