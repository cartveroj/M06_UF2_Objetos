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