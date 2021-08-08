import { cuadrado, makeRequest } from "./functions.js";


const btn = document.getElementById('makeRequest')

let api = 'https://thatcopy.pw/catapi/rest/'


btn.onclick = async ()=>{

    const res = await makeRequest(api)
    console.log(res);

}


console.group('Promesas');
console.log('dos');
const dos = await cuadrado(2)
console.log(dos);

console.log('tres');
cuadrado(3)
.then( (res) => {
    console.log(res);
})


console.log('cuatro');


try {
    const cuatro = await cuadrado('4')
    console.log(cuatro);
    
} catch (error) {
    
    console.error(error);
}
console.groupEnd('Promesas');


let rickAndMorty = 'https://rickandmortyapi.com/api/character/%d'


console.log(rickAndMorty.replace('%d',50));
// const api2 = await makeRequest(rickAndMorty.arguments())
// console.log(api2);