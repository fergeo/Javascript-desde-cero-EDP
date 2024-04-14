function primerElemento(arg){
    //dado el array pasado por parametro, tendras que devolver el primer elemento
    // tu código:
    return arg[0]

}

function ultimoElemento(arg){
    //dado el array pasado por parametro, tendras que devolver el ultimo elemento
    // tu código aqui:
    return arg[arg.length - 1]

}

function nuevoArray(arg){
    //dado el array pasado por parametro retorna su longitud
    // tu código aqui:
    return arg.length

}

function changeArray(arr){
    //dado el array pasado por parametro, cambia el valor del primero 
    //elemento por 'Aprendiendo' y el ultimo elemento por 'array'
    //retorna el nuevo valor
    // tu código aqui:
    arr[0] = "aprendido"
    arr[arr.length-1] = "array"

    return arr

}

function primerasCondicionales(arg){
    // pasados los array por parametros tendras que devolver según lo 
    // que corresponda:
    // longitud de array mayor que 3 retornar: 'Este array es mayor a 3'
    // longitud de array es igual a 3 retornar: 'Este array es igual a 3'
    // longitud de array menor que 3 retornar: 'Este array es menor a 3'
    // longitud de array igual a 0 retornar: 'Este array no contiene elementos'
    // tu código aqui:

    if(arg.length > 3)
        return "Este array es mayor a 3."
    else if(arg.length == 3)
        return "Este array es igual a 3."
    else if(arg.length < 3)
        return "Este array es menor a 3."
    else if(arg.length == 0)
        return "Este array no contiene elementos."
    
}

function sumandoEnUno(arg){
    // dado el array de numeros enteros pasado por parametro, a cada elemento 
    // del array tienes que sumarle 1.. ejemplo: [4 , 5, 6] -> [5 , 6, 7] 
    // tu código aqui:

   sumando = arg.map(function (x) { return x++ })
   return sumando
   
}

function valorMaximo(arr){
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del 
    //array y encontrar el valor más alto y devolverlo
    //ejemplo -> [1 , 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 99
    // Tu codigo:
    let max

    for(let i = 0; i < arr.length-1; i++ )
        if( i == 0)
            max = arr[0]
        else    
            if(arr[i] > max)
                max = arr[i]
    
    return max

}

function valorMinimo(arr){
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del 
    //array y encontrar el valor más bajo y devolverlo
    //ejemplo -> [ 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 2
    // Tu codigo:
    let min

    for(let i = 0; i < arr.length-1; i++ )
        if( i == 0)
            min = arr[0]
        else    
            if(arr[i] < min)
                min = arr[i]
    
    return min
}

function cantPares(arr){
    //Se para un array de enteros, tienes que iterar por los elementos y 
    //contar la cantidad de numeros que son pares devolver la cantidad 
    //de pares total. Ejemplo: [1,2,3,4,5,6,7,8,9] -> 4
    // Tu codigo:
    
    for(i == 0 ; i < arr.length ; i++)
        if( arr[i]%2 == 0 )
            cant++

    return cant
    

}

function eliminarDuplicado(arr){
    // Se para un array de enteros, tienes que iterar por los elementos 
    //y eliminar los duplicados, y devolver el array nuevo sin duplicado.
    // ejemplo: [1,1,2,4,5,6,6,7,1,8,9] -> [1,2,4,5,6,7,8,9]
    // Tu codigo:

    dataArr = new Set(arr);

    result = [...dataArr];

    return result
    
}

function enOrden(arr, ascendente = true){
    //Se para un array de enteros de forma desordenada, tendras que 
    //devolver el mismo array pero de forma ordenada
    //de menor a mayor. ejemplo -> [7, 2, 4, 6, 1, 3, 5] -> [1, 2, 3, 4, 5, 6, 7]
    //Tu codigo:
    for (i = 0; i < arr.length; i++) 
        for (j = 0; j < (arr.length - i - 1); j++) 
            if (arr[j] > arr[j + 1]) 
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
}            
        

function dosEnUno(arr1, arr2){
    //Escribe una función que reciba dos arrays y devuelva un nuevo array 
    //que contenga todos los elementos de ambos arrays, sin duplicados.
    //Tu codigo:
    // return arr1.concat(arr2);

    dataArr = new Set(arr1.concat(arr2));

    result = [...dataArr];

    return result

}

function matrizTranspuesta(matriz){
    //Escribe una función que reciba una matriz (array de arrays) y 
    //devuelva la matriz transpuesta, es decir, intercambiando filas 
    //por columnas.
    //Tu codigo:
    return a[0].map (_, c) => return a.map (r) => return r[c];


}

module.exports = {
    nuevoArray,
    changeArray,
    sumandoEnUno,
    primerElemento,
    ultimoElemento,
    primerasCondicionales,
    valorMaximo,
    valorMinimo,
    cantPares,
    eliminarDuplicado,
    enOrden,
    dosEnUno,
    matrizTranspuesta,
}