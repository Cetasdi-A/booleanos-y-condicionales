let numero1 = prompt("ingrese un numero");
let numero2 = prompt ("ingrese un numero");

if (numero1 > numero2) {
    document.write (`el numero mayor es ${numero1} y el menor es ${numero2} `);
}
else if (numero1==numero2) {
    document.write ("los numeros son iguales");
}
else {
    document.write (`el numero mayor es ${numero2} y el menor es ${numero1} `);
}
