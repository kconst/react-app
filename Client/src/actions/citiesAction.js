import axios from "axios";
// export function getCities(){
// console.log("hi")
//     const allCities = axios.get("/city").then(res => dispatch )  //aqui estoy cogiendo los datos de cities de mi base de datos
//   console.log(allCities)
//     return{
//         type: "ALL_CITIES",
//         payload: allCities
//     }
// }
export function getCities(){ 
    console.log("works") //en esta funcion llamamos la inforamcion mediante axios, con una promesa ( mirar dispatch)
    return dispatch =>{
        axios.get('/city').then(
           res =>{dispatch (cities(res.data))} //aqui accdemos a la informacion que queremos y la almacenamos abajo.
        )
    }
}

export function cities(city){  //creamos la funcion donde tendremos toda nuestra info, en payload(donde tenemos la informacion), con el type que se
    return {
        type:"ALL_CITIES",
        payload: city
    }
}