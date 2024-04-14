/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

const { CHAR_NO_BREAK_SPACE } = require("picomatch/lib/constants");

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:

function bienvenida()
{
    let nombre = prompt("Ingrese su mobre: ")
    let apellido = prompt("Ingrese su apellido: ")

    return "Bienvenido " + nombre +  " " + apellido
}



/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:

function calc(num1 , operador , num2)
{
    switch(operador)
    {
        case "+":
            return num1 + num2
            break
        case "-":
            return num1 - num2
            break
        case "*":
            return num1 * num2
            break
        case "/":
            return num1 / num2
            break
    }
}

/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:

function temp(max,min,lluvia)
{
    let dia = ""

    if(max < 15)
        dia = "Es recomendable salir con abrigo."
    else if(max < 26 && min > 17)
        dia = "El dia esta lindo."
    else if(min > 25)
        dia = "El dia estara caluroso."
}


/**********************************************************************************/

// Crea una función que reciba una contraseña, esta función tiene que determinar si contiene al menos 8 caracteres la contraseña.
// Si la contraseña contiene 8 caracteres, devolver "La contraseña es segura", en caso contrario devolver "La contraseña es insegura"
// IMPORTANTE -> la funcion debe llamarse 'checkPassword'
// Tu código:

function checkPassword(pass)
{
    let seguridad = 0
    let char_alpha = /^[\w\D-]+$/
    let digitos = /\d/;
    let letras = /[A-Za-z]/;
    
    if(digitos.exec(pass) && letras.exec(pass))
        return "Constraseña segura."
    else 
        return "Debilidad en la contraseña."
}


/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:

function stringInverso(cadena)
{
    let invertida

    for(let i = cadena.length ; i > 0 ; i++){
        invertida = invertida + cadena[i]
    }

    return invertida
}



/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    checkPassword,
    stringInverso,
}