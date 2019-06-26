//Declaración de variables
var nombreUsuario = "Sebastian Colussi";
var saldoCuenta = 4000;
var limiteExtraccion = 5000;

function iniciarSesion() {
    var codigodeVerificacion = 1234;
    var codigo = prompt("Escriba su codigo de verificacion");
    if (codigo==codigodeVerificacion){
       alert("Bienvenido " + nombreUsuario + " ya podes realizar operaciones");
    } else {
        saldoCuenta = 0;
        alert("Codigo Incorrecto. Tu dinero se ha retenido por cuestiones de seguridad");
        document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
    }

}
function sumarACuenta(dinero) { 
    return saldoCuenta + dinero;
    
}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();

}



//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("Cual es el nuevo valor d el limite de Extracción?");
    if (nuevoLimite=='' || nuevoLimite<=0 || nuevoLimite == null) {
        alert("Elija un valor nuevamente");
    }else{
        limiteExtraccion=nuevoLimite;
    alert("Tu nuevo limite de Extracción es " + nuevoLimite)
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + nuevoLimite;
    
    }
}
  
function extraerDinero() {
    var dineroExtraer = prompt("Cuanto dinero desea extraer?");

    if (dineroExtraer == null || dineroExtraer=='' || dineroExtraer<=0) {
        alert("Elija un valor nuevamente");
        return;
    }
        // extraerDinero(); // el return a secas sale de la funcion, y en este caso me devuelve la funcion.
    
    if (dineroExtraer>saldoCuenta) {
        alert("No hay saldo disponible para extraer esa cantidad");
    }

    else if (dineroExtraer%100){
        alert("Solo podes sacar billetes de 100");
        }
    else if (dineroExtraer>limiteExtraccion){
        alert("La cantidad de dinero que deseas extraer es mayor a tu limite de Extraccion");
    }
    else if (dineroExtraer<saldoCuenta) {
        var saldoAnterior = parseInt(saldoCuenta);
        var dineroActual = parseInt(saldoCuenta) - parseInt(dineroExtraer);
        saldoCuenta=dineroActual;
        alert("Sacaste " + dineroExtraer + " Saldo anterior " + saldoAnterior + " Ahora tenes " + dineroActual);
        document.getElementById("saldo-cuenta").innerHTML = "$" + dineroActual;
        }     
    }


function depositarDinero() {
    var dineroDeposito = prompt("Cuanto dinero desea depositar?")
    if (dineroDeposito == null || dineroDeposito=='' || dineroDeposito<=0) {
        alert("Depositar un valor valido")
        return;
       
    }
    var dineroActual2 = parseInt(dineroDeposito) + parseInt(saldoCuenta);
    document.getElementById("saldo-cuenta").innerHTML = "$" + dineroActual2;
        alert("Tu saldo es " + dineroActual2);
    return saldoCuenta = dineroActual2;
}

function pagarServicio() {
    var agua = 350
    var telefono = 425
    var luz = 210
    var internet = 570
    var num = prompt("Ingresa el numero que corresponda con el servicio que queres pagar \n 1 - Agua\n 2 - Telefono\n 3 - Luz\n 4 - Internet")
    
    switch (num) {
        case "1":
            saldoCuenta = saldoCuenta - agua;
            saldoAnterior = saldoCuenta + agua;
            alert("Pagaste el agua por " + agua + "\nAhora te quedan " + saldoCuenta + "\nTenias " + saldoAnterior);
            document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
        break;
        case "2":
            saldoCuenta = saldoCuenta - telefono;
            saldoAnterior = saldoCuenta + telefono;
            alert("Pagaste el telefono por " + telefono + "\nAhora te quedan " + saldoCuenta + "\nTenias " + saldoAnterior);
            document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
        break;
        case "3":
            saldoCuenta = saldoCuenta - luz;
            saldoAnterior = saldoCuenta + luz
            alert("Pagaste la luz por " + luz + "\nAhora te quedan " + saldoCuenta + "\nTenias " + saldoAnterior);
            document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
        break;
        case "4":
            saldoCuenta = saldoCuenta - internet;
            saldoAnterior = saldoCuenta + internet;
            alert("Pagaste el internet por " + internet + "\nAhora te quedan " + saldoCuenta + "\nTenias " + saldoAnterior);
            document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
        break;
    }
    

}

function transferirDinero() {
    var cuentaAmiga1 = 1234567
    var cuentaAmiga2 = 7654321
    var importeTransferir = prompt("Ingrese el importe a transferir");
    if (importeTransferir>saldoCuenta) {
        alert("El dinero que deseas transferir no esta disponible");
    
    }else if (importeTransferir<saldoCuenta) {
        var numeroDeCuenta = prompt("Ingresa el numero de cuenta al que desea transferir");
        // alert("Se hacen transferido " + importeTransferir + "\nCuenta destino: " + numeroDeCuenta)
        if(numeroDeCuenta != (cuentaAmiga1 || cuentaAmiga2)){
            alert("Este numero de cuenta no pertenece a tus contactos")
        }else{
            saldoCuenta = saldoCuenta - importeTransferir;
            document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
            alert("Se hacen transferido " + importeTransferir + "\nCuenta destino: " + numeroDeCuenta);
        }
    }

}
   


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
    

}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}