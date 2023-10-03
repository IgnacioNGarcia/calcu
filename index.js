function sumar_numero(numero){
    const numero_pantalla = document.getElementById("numeros-pantalla");
    numero_pantalla.innerHTML += numero;
}
function agregar_operacion(operacion){


    const numero_pantalla = document.getElementById("numeros-pantalla");
    numero_pantalla.innerHTML += operacion;
    const operacion_cuenta = document.getElementById("operacion");
    operacion_cuenta.value = operacion;

}

function borrar_todo(){
    const numero_pantalla = document.getElementById("numeros-pantalla");
    numero_pantalla.innerHTML = '';
}
function borrar_ultimo(){
    const numero_pantalla = document.getElementById("numeros-pantalla");
    var contenido = numero_pantalla.textContent;

    if (contenido.length > 0) {
        // Verifica que haya al menos un carácter en el elemento
        contenido = contenido.slice(0, -1); // Elimina el último carácter
        numero_pantalla.textContent = contenido; // Actualiza el contenido del elemento
    }
}

function calcular(){
    const numero_pantalla = document.getElementById("numeros-pantalla");
    texto_numeros = numero_pantalla.innerHTML;
    
    const operacion = document.getElementById("operacion");
    numeros = texto_numeros.split(operacion.value);
    let resultado;
    switch(operacion.value){
        case '+':
            resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
        break;
        case '-':
            resultado = parseInt(numeros[0]) - parseInt(numeros[1]);
        break;
        case '/':
            resultado = parseInt(numeros[0]) / parseInt(numeros[1]);
        break;
        case '%':
            resultado = parseInt(numeros[0]) % parseInt(numeros[1]);
        break;
        case 'x':
            resultado = parseInt(numeros[0]) * parseInt(numeros[1]);
        break;
        case '√':
            resultado = Math.sqrt(parseInt(numeros[1]));
        break;
        case '!':
            resultado = factorial(parseInt(numeros[0]));
        break;
        default:
            resultado = 'Error';

    }
    numero_pantalla.innerHTML = resultado;
    
}


function factorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}
