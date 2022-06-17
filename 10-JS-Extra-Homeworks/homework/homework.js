// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arr2 = []
  for(let key in objeto) {
    let arr1 = []
    arr1.push(key)
    arr1.push(objeto[key])
    arr2.push(arr1)
  }
  return arr2
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var contador = {};
  string.replace(/\S/g, function(p){
    contador[p] = (isNaN(contador[p]) ? 1 : contador[p] + 1)
  })
  return contador
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arr = s.split("")
  let arr1 = []
  let arr2 = []
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i].toUpperCase()) {
      arr2.push(arr[i])
    }else {
      arr1.push(arr[i])
    }
  }
  let arr3 = arr2.concat(arr1)
  let string = arr3.join("")
  return string
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var nuevaCadena = str.split(' ').map(function(elemento){ return elemento.split('').reverse().join("")})
return nuevaCadena.join(' ')

}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
var capi = numero.toString()
if(capi.split("").reverse().join("") == numero){
  return "Es capicua"
}else {
  return "No es capicua"
}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let news = cadena.split("")
  let resul = news.filter((value)=>value!=="a"&&value!=="b"&&value!=="c").join("")
  console.log(resul)
  return resul
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arreglo2 = arr.sort((p1, p2) => p1.length - p2.length);
    return arreglo2;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
var arreglo3 = []
for(m=0;m<arreglo1.length;m++){for(r=0;r<arreglo2.length;r++){if(arreglo1[m]===arreglo2[r]){arreglo3.push(arreglo1[m])}}}
return arreglo3
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

