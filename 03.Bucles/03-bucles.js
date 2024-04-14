
function esVocal(letra){
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') 
        return true
    else 
        return false
}

function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
    cantidad = 0

    for(I = 0 ; i < phrase.length() ; i++){
        if(esVocal(phrase[i]))
            cantidad++
    }
        
    return cantidad

}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
// Tu código:👇
    encontro = 0
    
    while(encontro == 0){

        if(divisor%dividendo == 0)
            encontro = 1

        dividendo++     
    }

    return dividendo - 1
}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
    for(i = 1;  i < 1001; i++)
        if(i == x)
            return("El numero x es: " + i)
}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
    total = 0
    
    for(i = 1 ; i <= num ; i++)
        total = total + I

    return total

}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
    decimal = 0

    for(i = 0 ; i < num.length ; i++)
        decimal = decimal + (Math.floor(num) * Math.por(i,2)) 
    
    return decimal

}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
    let primo = 1

    for(let i = 2 ; i <= numero ; i++)
        if(numero%i == 0)
            primo++
    
    if(primo == 2)
        return "Es primo."
    else    
        return "No es primo."

}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
    let invertida

    for(let i = cadena.length ; i > 0 ; i++){
        invertida = invertida + cadena[i]
    }

    return invertida

}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}