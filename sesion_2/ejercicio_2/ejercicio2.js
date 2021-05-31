//EJERCICIO IF ELSE//

var time = 9;
var saludo;

if (time >= 0 && time < 12) {
        saludo = "Buenos días";
} else if (time >= 12 && time < 20) {
        saludo = "Buenas tardes";
} else if (time >= 20 && time <= 24) {
        saludo = "Buenas noches";
} else {
    saludo = "Hora desconocida";
}

//console.log(saludo);

/*
for(var i = 0; i <= 200; i++) {
    console.log("Hello World");
    console.log(i);
} */

/* for(var i= 0; i <=100; i++) {
    console.log(i);
} */

/* for(var i= 0; i <=100; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
} */

/* for (var contador = 2; contador <= 100; contador++) {
    var primo = true;

    for (var i = 2; i <= contador; i++) {
      if (contador % i === 0 && i !== contador) {
        primo = false;
      }
    }

    if(primo) {
      console.log(contador);
    }
  }
   */

