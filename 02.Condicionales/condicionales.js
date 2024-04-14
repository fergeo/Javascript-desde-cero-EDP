// Ejercicio de Ejemplo:
/* TITULO - NO MODIFICAR*/ document.write('<div class="titulo"><p>Ejercicio de Ejemplo - Resultado:</p></div>')
// En la Escuela de Programación tienen como condicion para poder inscribirse a los cursos, la persona tenga 18 años o más.
// Pidele al usuario que ingrese su edad ( usando prompt() ), y en caso que tenga 18 años o más imprima un mensaje indicandole que puede inscribirse.
// caso contrario se le indica que no puede inscribirse y la razón.
// Tu codigo 👇:

let edad

do{
        edad = prompt("Por favor ingrese su edad: ")
        if(edad < 18)
        {
                console.log("Imposibilidad de incribirse. La edad debe ser mayor o igual a 18 años.")                
                document.write("Imposibilidad de incribirse. La edad debe ser mayor o igual a 18 años.")                       
        }
        else    
        {
                console.log("Continue con su inscripción.")    
                document.write("Continue con su inscripcion.")            
        }

}
while( edad < 18 )


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 1 - Calificación | Resultado:</p></div>')
// Ejercicio N° 1:
// Escribe un programa que solicite al usuario ingresar una calificación del 0 al 100 y luego muestre un mensaje según la siguiente escala:
// Calificación de 90 o más: "Excelente"
// Calificación entre 70 y 89: "Bueno"
// Calificación entre 60 y 69: "Suficiente"
// Calificación menor a 60: "Insuficiente"
// Tu codigo 👇:

let calific

do{
        calific = prompt("Por favor ingrese la calificación: ")

        if(calific >= 90){
                console.log("Exclente")
                document.write("Exclente")                
        }
        else if(calific >= 70 && calific <= 89){
                console.log("Bueno")
                document.write("Bueno")
        }
        else if(calific >= 60 && calific <= 69){
                console.log("Suficioente")
                document.write("Suficioente")                
        }
        else if(calific >= 0 && calific < 60){
                console.log("Insuficiente")
                document.write("Insuficiente")
        }
        else if(calific < 0 && calific >= 101){
                console.log("Calificación no valida.")
                document.write("Calificación no valida.")                
        }
}
while( calific >= 0 && calific <= 100)


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 2 - Par o Impar | Resultado:</p></div>')
// Ejercicio N° 2:
// Escribe un programa que solicite al usuario ingresar un número entero y luego determine si es par o impar.
// Tu codigo 👇:

let entero

do
{

        entero = prompt("Ingrese un numero:")

        if (!isInteger(entero)){
                console.log("Debe ingresar un número entero.")
                document.write("Debe ingresar un número entero.")                
        }
        else if( entero%2 == 0 ){
                console.log("El número es par.")
                document.write("El número es par.")
        }
        else if( entero%2 != 0 ){
                console.log("El número es impar.")
                document.write("El número es impar.")
        }


}
while( !isInteger(entero) )

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 3 - Día de la Semana | Resultado:</p></div>')
// Ejercicio N° 3:
// Escribe un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana, y luego imprima el nombre del día correspondiente.
// Por ejemplo, si el usuario ingresa 1, el programa debe imprimir "Lunes".
// Tu codigo 👇:

let dia

do
{
        dia = prompt("Ingrese un numero: ")
        switch(dia)
        {
                case 1:
                        console.log("Lunes")
                break
                case 2:
                        console.log("Martes")
                break
                case 3:
                        console.log("Miercoles")
                break
                case 4:
                        console.log("Jueves")
                break
                case 5:
                        console.log("Viernes")
                break
                case 6:
                        console.log("Sabado")
                break
                case 7:
                        console.log("Domingo")
                break   
                default:
                        console.log("Debe ingresar nuevamente el numero de dia.")                                
        }        
                                                                                                             
}
while( dia < 1 || dia > 7 )

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 4 - Antigüedad laboral | Resultado:</p></div>')
// Ejercicio N° 4:
// Escribe un programa que solicite al usuario ingresar su antigüedad en años en una empresa y su salario actual.
// Si la antigüedad es mayor o igual a 5 años, y el salario es menor a $500,
// el programa debe imprimir un mensaje que indique que el empleado es elegible para una bonificación del 10% de su salario actual.
// Tu codigo 👇:

let antigüedad, salario

do
{

        antigüedad = prompt("Ingrese la antiguedad: ")
        salario = prompt("Ingrese su salrio: ")

        if(  antiguedad < 5  && salario >= 500 )
                console.log("No accedio a una bonificación.")
        else
        {
                let bonificacion = (salario*10)/100
                console.log("Para el sueldo " + salario + " tendra una bonificacion de " + bonificacion)
        }
}
while(  antiguedad < 5  && salario >= 500 )


//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 5 - Rango de edad | Resultado:</p></div>')
// Ejercicio N° 5:
// Escribe un programa que solicite al usuario ingresar su edad y luego determine en qué rango de edad se encuentra:
// Menor de 18 años: "Menor de edad"
// Entre 18 y 65 años: "Adulto"
// Mayor de 65 años: "Senior"
// Tu codigo 👇:

do
{
        edad = prompt("Ingrese la edad: ")

        if( edad < 18 )
                console.log("Menor de edad.")
        else if(edad >= 18 && edad < 65)
                console.log("Adulto")     
        else if(edad >= 65)
                console.log("Senior")    
        else
                console.log("Ingrese un valor mayor que cero.")            
}
while(edad > 0)


//_________________________________________


// 👇👇 NO MODIFICAR 👇👇

const footer = `

<footer>
        <a href="https://github.com/AvLeo/Javascript-desde-cero-EDP" target="_blank">REPO GITHUB</a>
        <a href="https://leo-a.notion.site/JavaScript-8243598cde1e4cc5aea0fc1eeb7a090f?pvs=74" target="_blank">Notion</a>
</footer>


`

document.write(footer)