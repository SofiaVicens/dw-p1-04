/*
Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110)

Calcule e informe los siguientes datos:

Promedio de edad general
Promedio de edad de las mujeres
Promedio de edad de los hombres
Porcentaje de mujeres menores a 21 años
Porcentaje de hombres mayores a 21 años
La mayor edad ingresada de las mujeres
La menor edad ingresada de los hombres
Los tres valores ingresados deben ser validados según corresponda 
*/

let ciudad, sexo, edad;

let contadorTodos=0;
let contadorHombres=0;
let contadorMujeres=0;

let promedioTodos=0;
let promedioHombres=0;
let promedioMujeres=0;

let menores21=0;
let mayores21=0;

let mayorMujer=0;
let menorHombre=111;

/* No sé cuantos datos me van a ingresar así que uso un do while */
do {
    
    do {
        ciudad= prompt("Ingrese la ciudad").trim();
    } while (!isNaN(ciudad) || ciudad===null || ciudad==="");

    do {
        sexo= prompt("Ingrese el sexo (H o M)").toUpperCase();
    } while (!(sexo ==="H" || sexo ==="M"));

    do {
        edad= parseInt(prompt("Ingrese la edad"));
    } while (isNaN(edad) || edad<0 || edad>110);
    
    contadorTodos++;
    promedioTodos+= edad;

    if (sexo=="H") {
        contadorHombres++;
        promedioHombres+= edad;
        
        if(edad>21){
            mayores21++;
        }

        if(edad<menorHombre){          
            menorHombre=edad;
        }

    } else {
        contadorMujeres++;
        promedioMujeres+= edad;
        
        if(edad<21){
            menores21++;
        }

        if(edad>mayorMujer){          
            mayorMujer=edad;
        }
    }
     
} while (confirm("¿Querés agregar otro dato más?"));

console.log(`El promedio de edad general es = ${promedioTodos/contadorTodos}`);
console.log(`El promedio de edad de los hombres es = ${promedioHombres/contadorHombres}`);
console.log(`El promedio de edad de las mujeres es = ${promedioMujeres/contadorMujeres}`);
console.log(`El porcentaje de hombres mayores a 21 es = ${((mayores21*100)/contadorHombres).toFixed(2)}%`);
console.log(`El porcentaje de mujeres menores a 21 es = ${((menores21*100)/contadorMujeres).toFixed(2)}%`);
console.log(`El hombre de menor edad tiene = ${menorHombre}`);
console.log(`La mujer de mayor edad tiene = ${mayorMujer}`);

    







