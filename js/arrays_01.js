function crearArrayColores(){
    let arrayDeColores = ["verd", "vermell", "groc", "blau",
        "negre", "blanc"];
        let arrayColoresMenores = [];
    //arrayDeColores.sort();
    let colorAComparar = "marron";
    let text = `<p> Los colores son mayores o menores a ${colorAComparar}? </p>`
     text += "<ul>";
    for(let i =0; i< arrayDeColores.length; i++){
        let esMenor = esMayorOMenor(arrayDeColores[i], colorAComparar);
        text +=`<li> El ${arrayDeColores[i]} es menor que ${colorAComparar}: ${esMenor}</li>` 

        if(esMenor){
            arrayColoresMenores.push(arrayDeColores[i]);
        }
        
    }

    text += "</ul>";
    text+= `<p> Los colores menores a ${colorAComparar} son: </p>`
    text += "<ul>";
    for(let i =0; i<arrayColoresMenores.length; i++){
        text += `<li> ${arrayColoresMenores[i]} </li>` 
    }
    text += "</ul>";

    text += "<p> Los 2 ultimos colores del array son: </p>"
    
    let ultimo1 = arrayDeColores.pop();
    let ultimo2 = arrayDeColores.pop();
    text += "<ul>";
        text += `<li> ${ultimo1} </li>` 
        text += `<li> ${ultimo2} </li>` 
    text += "</ul>";
    let nuevoColor = "turquesa";
    text +=   `<p> Añadimos el color ${nuevoColor} al array: </p>`
    arrayDeColores.push(nuevoColor);
    text += "<ul>";
    for(let i=0; i< arrayDeColores.length; i++){
        text += `<li> ${arrayDeColores[i]} </li>`
    }
    text += "</ul>";

    let colorAEliminar = "verd";
    text += `<p> Eliminamos el color ${colorAEliminar} del array: </p>`;
    for(let i=0; i< arrayDeColores.length; i++){
        let posicion = arrayDeColores.indexOf(colorAEliminar);
        console.log(posicion);
        if(posicion >= 0){
            arrayDeColores.splice(posicion,1);
        }
        text += `<li> ${arrayDeColores[i]} </li>`
        
    }
    document.getElementById("arrayColores").innerHTML = text;
}

function esMayorOMenor(a,b){
    let esMenor = false;
    if(a<b){
        esMenor = true;
    }
    return esMenor;
}

function funcionEjemploArrays(){
    let arrayColores = ["rojo", "verde","amarillo","azul", "blanco"];
    let text = '<p><b>Funcion at()</b>'
    text += '<b> => </b>'

    for(let i =0; i < arrayColores.length; i++){
        text += `[${i}]  ${arrayColores[i]}`
    }
    //funcion at()
    text += '<b> => </b>'
    let posicion = 3;
    text += `arrayColores.at(${posicion} );`
    let resultado= arrayColores.at(posicion);
    text += `<b> => </b>  ${resultado}  </p>`
   
    //funcion concat
    let arrayNuevo =["lima","manzana","pera"];
    text += '<p><b>Funcion concat()</b>'
    text += '<b> => </b>'
    text += `arrayColores.concat(ArrayNuevo);`
    text += '<b> => </b>'
    let arrayConcatenado = arrayColores.concat(arrayNuevo);
    for(let a=0; a < arrayConcatenado.length ; a++){
        text += `[${a}] ${arrayConcatenado[a]}`
    }
    //Constructor
    let objetoArray = new Array("uno","dos","tres");
    text += '<p><b>Constructor</b>'
    text += '<b> => </b>'
    text += `objetoArray = new Array("uno","dos","tres");`
    text += '<b> => </b>'
    for(let u =0; u< objetoArray.length; u++){
        text += `[${u}] ${objetoArray[u]}`
    }

    //Funcion CopyWithin()
    text += '<p><b>CopyWithin(target, start, end)</b>'
    text += '<b> => </b>'
    arrayColores.copyWithin(1,2);
    text += `arrayColores = ["rojo", "verde","amarillo","azul", "blanco"]
    arrayColores.copyWithin(1,2)`
    text += '<b> => </b>'
    text += arrayColores

     //Funcion entries()
     text += '<p><b>Entries()</b>'
     text += '<b> => </b>'
     let tmp = arrayColores.entries();
     text += `arrayColores = ["rojo", "verde","amarillo","azul", "blanco"]
      tmp = arrayColores.entries()`
     text += '<b> => </b>'
     for(let x of tmp){
        text += x
     }

     //Funcion Every()
     text += '<p><b>Every()</b>'
     text += '<b> => </b>'
     const arrayValores = [1,-1,10,5,-15];
     text += `let arrayValores = [1,-1,10,5]
     arrayValores.every(checkValoresPositivos);`
     text += '<b> => </b>'
     text += arrayValores.every(checkValoresPositivos);
     
     //Funcion Fill()
     text += '<p><b>Fill()</b>'
     text += '<b> => </b>'
     text += `let arrayValores = [1,-1,10,5]
     arrayValores.fill("hola");`
     text += '<b> => </b>'
     text += arrayValores.fill("hola");

     //Funcion filter()
     text += '<p><b>Filter()</b>'
     text += '<b> => </b>'
     let arrayEdades= [15,18,30,33];
     text += `let edades = [15,18,30,33];
     arrayEdades.filter(checkMayorEdad);`
     text += '<b> => </b>'
     text += arrayEdades.filter(checkMayorEdad);

     //Funcion find()
     text += '<p><b>find()</b>'
     text += '<b> => </b>'
     text += `let edades = [15,18,30,33];
     arrayEdades.find(checkMayorEdad);`
     text += '<b> => </b>'
     text += arrayEdades.find(checkMayorEdad);

     //Funcion findIndex()
     text += '<p><b>findIndex()</b>'
     text += '<b> => </b>'
     text += `let edades = [15,18,30,33];
     arrayEdades.findIndex(checkMayorEdad);`
     text += '<b> => </b>'
     text += arrayEdades.findIndex(checkMayorEdad);

     //Funcion flat()
     text += '<p><b>flat()</b>'
     text += '<b> => </b>'
     let arrayConArrays = [["hola",12],[15,"lima"]];
     text += `arrayConArrays = [["hola",12],[15,"lima"]];
     let newArray = arrayConArrays.flat();`
     text += '<b> => </b>'
     text += arrayConArrays.flat();

      //Funcion flatMap()
      text += '<p><b>flatMap()</b>'
      text += '<b> => </b>'
      let users = [
        { name: "Juan", age: 25 },
        { name: "María", age: 27 },
        { name: "Pedro", age: 30 }
      ];
      text += `users = [
        { name: "Juan", age: 25 },
        { name: "María", age: 27 },
        { name: "Pedro", age: 30 }
      ];
      let names = users.flatMap((user) => user.name);`
      text += '<b> => </b>'
      text += users.flatMap((user)=> user.name);

      //Funcion foreach()
      text += '<p><b>foreach()</b>'
      text += '<b> => </b>'
      text += `let edades = [15,18,30,33];
      edades.foreach((edad)=>{ sum += edad})`
      text += '<b> => </b>'
      let sumaEdades = 0;
      arrayEdades.forEach((edad)=>{ sumaEdades += edad});
      text += sumaEdades;

      //Funcion from()
      text += '<p><b>from()</b>'
      text += '<b> => </b>'
      let vocales = "aeiou";
      text += `let vocalesStr = "aeiou";
      let arrayVocales = Array.from(vocalesStr)`
      text += '<b> => </b>'
      text += Array.from(vocales);

      //Funcion includes()
      text += '<p><b>includes()</b>'
      text += '<b> => </b>'
      let arrayVocales = Array.from(vocales);
      text += `let vocalesArray = ["a","e","i","o","u"];
      vocalesArray.includes("a")`
      text += '<b> => </b>'
      text += arrayVocales.includes("a");

      //Funcion indexOf()
      text += '<p><b>indexOf()</b>'
      text += '<b> => </b>'
      text += `let vocalesArray = ["a","e","i","o","u"];
      vocalesArray.indexOf("u")`
      text += '<b> => </b>'
      text += arrayVocales.indexOf("u");

      //Funcion isArray()
      text += '<p><b>isArray()</b>'
      text += '<b> => </b>'
      text += `let vocalesArray = ["a","e","i","o","u"];
      let result = Array.isArray(vocalesArray);`
      text += '<b> => </b>'
      text += Array.isArray(arrayVocales);

      //Funcion join()
      text += '<p><b>join()</b>'
      text += '<b> => </b>'
      text += `let vocalesArray = ["a","e","i","o","u"];
      let result = arrayVocales.join() //convert to string;`
      text += '<b> => </b>'
      text += arrayVocales.join();
     
      //Funcion keys()
      text += '<p><b>keys()</b>'
      text += '<b> => </b>'
      text += `let arrayEdades = [15,18,30,33];
      let keys = arrayEdades.keys();`
      text += '<b> => </b>'
      let keys = arrayEdades.keys();
      for(let key of keys){
        text += key
      }
      
       //Funcion length()
       text += '<p><b>length()</b>'
       text += '<b> => </b>'
       let arrayFrutas = ["manzana","lima","uva","lima"];
       text += `let arrayFrutas = ["manzana","lima","uva","lima"];
       let longitud = arrayFrutas.length();`
       text += '<b> => </b>'
       text += arrayFrutas.length;

       //Funcion map()
       text += '<p><b>map()</b>'
       text += '<b> => </b>'
       text += `let arrayNumeros = [1,2,3,4,5];
       let multiplPor10= arrayNumeros.map((numero)=>numero*10)`
       text += '<b> => </b>'
       let arrayNumeros = [1,2,3,4,5];
       text += arrayNumeros.map((numero)=>numero * 10);

        //Funcion pop()
        text += '<p><b>map()</b>'
        text += '<b> => </b>'
        text += `let arrayNumeros = [1,2,3,4,5];
        arrayNumeros.pop();`
        text += '<b> => </b>'
        text += arrayNumeros.pop();

        //Funcion prototype
        text += '<p><b>prototype</b>'
        text += '<b> => </b>'
        Array.prototype.myUpperCase = function () {
            for (let i = 0; i < this.length; i++) {
              this[i] = this[i].toUpperCase();
            }
          };
        text += `Array.prototype.myUpperCase = function () {
            for (let i = 0; i < this.length; i++) {
              this[i] = this[i].toLowerCase();
            }
          };
          arrayColores = ["rojo", "verde","amarillo","azul", "blanco"];
          arrayColores.myUpperCase();
          `
        text += '<b> => </b>'
        arrayColores.myUpperCase();
        text += arrayColores

        //Funcion push()
        text += '<p><b>push()</b>'
        text += '<b> => </b>'
        text += `let arrayNumeros = [1,2,3,4];
        arrayNumeros.push(30);`
        text += '<b> => </b>'
        arrayNumeros.push(30);
        text += arrayNumeros

        //Funcion reduce()
        text += '<p><b>reduce()</b>'
        text += '<b> => </b>'
        text += `let arrayNumeros = [1,2,3,4,30];
        let maximo = arrayNumeros.reduce(function(acumulador, valorActual){
            return Math.max(acumulador, valorActual)
        },0);`
        text += '<b> => </b>'
       
        text += arrayNumeros.reduce(function(acumulador, valorActual){
            return Math.max(acumulador, valorActual)
        },0);
       
        //Funcion reduceRight()
        text += '<p><b>reduceRight()</b>'
        text += '<b> => </b>'
        text += `let arrayNumeros = [1,2,3,4,30];
        let resta = arrayNumeros.reduceRigth(function(acumulador, valorActual){
            return acumulador-valorActual
        },0);`
        text += '<b> => </b>'
       
        text += arrayNumeros.reduceRight( (acumulador, valorActual) => {
            return acumulador-valorActual
        },0);

        //Funcion reverse()
        text += '<p><b>reverse()</b>'
        text += '<b> => </b>'
        text += `let arrayNumeros = [1,2,3,4,30];
        arrayNumeros.reverse()`
        text += '<b> => </b>'
       
        text += arrayNumeros.reverse();

         //Funcion shift()
         text += '<p><b>shift()</b>'
         text += '<b> => </b>'
         text += `let arrayNumeros = [30,4,3,2,1];
         arrayNumeros.shift()`
         text += '<b> => </b>'
        
         text += arrayNumeros.shift();

          //Funcion slice()
          text += '<p><b>slice()</b>'
          text += '<b> => </b>'
          text += `let arrayNumeros = [30,4,3,2,1];
          arrayNumeros.slice(0,1)`
          text += '<b> => </b>'
         
          text += arrayNumeros.slice(0,1);

        //Funcion some()
        text += '<p><b>some()</b>'
        text += '<b> => </b>'
        text += `let arrayEdades = [15,18,30,33];
        let boolean = arrayEdades.some(checkMayorEdad)`
        text += '<b> => </b>'
       
        text += arrayEdades.some(checkMayorEdad);

        //Funcion sort()
        text += '<p><b>sort()</b>'
        text += '<b> => </b>'
        text += `let arrayEdades = [15,18,30,33];
        arrayEdades.sort()`
        text += '<b> => </b>'
       
        text += arrayEdades.sort();

        //Funcion splice()
        text += '<p><b>splice()</b>'
        text += '<b> => </b>'
        text += `let arrayEdades = [15,18,30,33];
        arrayEdades.splice(0,2)`
        text += '<b> => </b>'
       
        text += arrayEdades.splice(0,2);

         //Funcion toString()
         text += '<p><b>toString()</b>'
         text += '<b> => </b>'
         text += `let arrayNumeros = [4,3,2,1];
         arrayNumeros.toString()`
         text += '<b> => </b>'
        
         text += arrayNumeros.toString();

         //Funcion unshift()
         text += '<p><b>unshift()</b>'
         text += '<b> => </b>'
         text += `let arrayFrutas = ["manzana","lima","uva","lima"];
         arrayFrutas.unShift("fresa","kiwi");`
         text += '<b> => </b>'
         arrayFrutas.unshift("fresa","kiwi");
         text += arrayFrutas

          //Funcion valueOf()
          text += '<p><b>valueOf()</b>'
          text += '<b> => </b>'
          text += `let arrayNumeros = [4,3,2,1];
          arrayNumeros.valueOf() // returns the array itself`
          text += '<b> => </b>'
        
         text += arrayNumeros.valueOf();

          
    document.getElementById("ejemploFuncionesArrays").innerHTML = text;

}

function checkValoresPositivos(valor){
    return valor >0;
}
function checkMayorEdad(edad){
    return edad >=18;
}
