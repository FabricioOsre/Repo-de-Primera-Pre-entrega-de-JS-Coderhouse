let ingresarNombre = prompt("Bienvenido a Concesionaria LAZARO B.  Ingresa tu Nombre");
while (ingresarNombre.trim() === "") {
    ingresarNombre = prompt("Por favor, ingresa tu Nombre para seguir operando");
}
let ingresarApellido = prompt("Ahora ingresa tu Apellido");
while (ingresarApellido.trim() === "") {
    ingresarApellido = prompt("Es necesario que ingreses tu Apellido");
}
alert("Hola " + ingresarNombre + " " + ingresarApellido + ". Ahora pasemos a elegir tu próximo auto.");

let preferencia = parseInt(prompt("Prefieres un auto: \n1. Usado \n2. Nuevo \n3. Indistinto"));

while (isNaN(preferencia) || preferencia < 1 || preferencia > 3) {
  preferencia = parseInt(prompt("Opción inválida. Por favor, elige una opción válida: \n1. Usado \n2. Nuevo \n3. Indistinto"));
}

if (preferencia === 1) {
  alert("Has elegido la opción de Usado.");
} else if (preferencia === 2) {
  alert("Has elegido la opción de Nuevo.");
} else if (preferencia === 3) {
  alert("Te da lo mismo, acá te vendemos autos de calidad y con garantía.");
}
let marca = prompt("Selecciona el auto de tu preferencia: \n1. Chevrolet Camaro ZL1 \n2. Ford Mustang Shelby GT500 \n3. Volkswagen Phaeton W12 \n4. Toyota 86-GTR \n5. Nissan GT-RXZ \n6. Hyundai Génesis G-90");

while (isNaN(marca) || marca < 1 || marca > 6) {
    marca = prompt("Selecciona el auto de tu preferencia: \n1. Chevrolet Camaro ZL1 \n2. Ford Mustang Shelby GT500 \n3. Volkswagen Phaeton W12 \n4. Toyota 86-GTR \n5. Nissan GT-RXZ \n6. Hyundai Génesis G-90");
}

let color = prompt("De que color te gustaria tu auto: \n1. Rojo \n2. Azul \n3. Blanco \n4. Beige \n5. Bordó  \n6. Gris \n7. Gris oscuro");

while (isNaN(color) || color < 1 || color > 7) {
    color = prompt("De que color te gustaria tu auto: \n1. Rojo \n2. Azul \n3. Blanco \n4. Beige \n5. Bordó  \n6. Gris \n7. Gris oscuro");
}
let precio = parseInt(" ");
let marcaElegida;
switch (marca) {
  case "1":
    marcaElegida = "Chevrolet Camaro ZL1";
    precio = 180000;
    alert("El pecio en efectivo - contado es: U$$"+ precio)
    break;
  case "2":
    marcaElegida = "Ford Mustang Shelby GT500";
    precio = 250000;
    alert("El pecio en efectivo - contado es: U$$"+ precio)
    break;
  case "3":
    marcaElegida = "Volkswagen Phaeton W12";
    precio = 115000;
    alert("El pecio en efectivo - contado es: U$$"+ precio)
    break;
  case "4":
    marcaElegida = "Toyota 86-GTR";
    precio = 160000;
    alert("El pecio en efectivo - contado es: U$$"+ precio)
    break;
  case "5":
    marcaElegida = "Nissan GT-RXZ";
    precio = 155000;
    alert("El pecio en efectivo - contado es: U$$"+ precio)
    break;
  case "6":
    marcaElegida = "Hyundai Génesis G-90";
    precio = 175000;
    alert("El pecio en efectivo / contado es: U$$"+ precio)
    break;
}
let colorElegido;
switch (color) {
  case "1":
    colorElegido = "Color Rojo";
    break;
  case "2":
    colorElegido = "Color Azul";
    break;
  case "3":
    colorElegido = "Color Blanco";
    break;
  case "4":
    colorElegido = "Color Beige";
    break;
  case "5":
    colorElegido = "Color Bordó";
    break;
  case "6":
    colorElegido = "Color Gris";
    break;
case "7":
    colorElegido = "Color Gris oscuro";
    break;
}
alert("Has seleccionado: " + marcaElegida + "  " + colorElegido + ". ¡Excelente elección!");

let metodosDePago = prompt("Selecciona el método pago de tu nueva joya: \n1 Efectivo \n2 Transferencia Bancaria \n3 Plan de financiación");
while (isNaN(metodosDePago) || metodosDePago < 1 || metodosDePago > 3) {
    metodosDePago = prompt("Selecciona el método pago de tu nueva joya: \n1 Efectivo \n2 Transferencia Bancaria \n3 Plan de financiación");
}

switch (metodosDePago) {
  case "1":
    alert("Como elegiste pagar en efectivo no se te sumarán cargos por impuestos, ni intereses")
    felicidades();
    break;
    case "2":
    alert("Ya que elegiste pagar con transferencia bancaria se te sumará el costo del IVA");
    calcularCostoTotalConIVA();
    felicidades();
    break;
    case "3":
    alert("Has elegido pagar con un plan de financiación por lo cual no sólo se te sumará el costo del IVA, si no que tambien se incrementará el valor de acuerdo a la cantidad de cuotas que elijas.");
    felicidades();
}
function calcularCostoTotalConIVA() {
    let iva = 0.21;
    let costoTotal = precio + (precio * iva);
   alert("El costo total del vehículo con IVA incluído es: " + "U$$"+ costoTotal);
  }
function felicidades (){
  alert("Felicidades " + ingresarNombre + " " + ingresarApellido + "," + " por la compra de tu nuevo vehículo " + marcaElegida + " "+ colorElegido +", nuestros representantes se comunicarán contigo para acordar el pago y realizar la documentación correspondiente.");
}
