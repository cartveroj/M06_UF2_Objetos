let arrayColores = ["rojo", "verde","amarillo","azul", "blanco"];

function mostrarArrayOriginal(){
    let text = '<p><b>Array inicial:</b> </p>'

    for(let i =0; i < arrayColores.length; i++){
        text += `[${i}]  ${arrayColores[i]}`
    }
    return text;
}

function funcionAt(){
    let text = mostrarArrayOriginal();
    let posicion = 3;
    text += '<p><b>Ejecucion: </b></p>'
    text += `<p>Posicion: ${posicion} <br> arrayColores.at(posicion); <br><br>`
    let resultado= arrayColores.at(posicion);
    text += `<b>Resultado </b> : ${resultado}  </p>`
    document.getElementById("ejemploAt").innerHTML = text;
}

function funcionConcat(){
    let text = mostrarArrayOriginal();
    let arrayNuevo =["lima","manzana","pera"];
    text += `<br>Array nuevo: <br> `
    for(let j=0; j< arrayNuevo.length ; j++){
        text += `[${j}] ${arrayNuevo[j]}`
    }
    text += '<br><br><b>Ejecucion: </b><br> arrayColores.concat(arrayNuevo);'
    text += '<br><br><b>Resultado:</b> <br> Array concatenado: <br>'    
    let arrayConcatenado = arrayColores.concat(arrayNuevo);
    for(let a=0; a < arrayConcatenado.length ; a++){
        text += `[${a}] ${arrayConcatenado[a]}`
    }

    document.getElementById("ejemploConcat").innerHTML = text;

}

function funcionConstructor(){
    let text = '<p>Creamos un array empleando el new Array()</p>'
    let objetoArray = new Array("lima","pera","manzana");
    text += '<b>Ejecucion:</b><br> let objetoArray = new Array("lima","pera","manzana");'
    text += `<br><b>Resultado:</b>: <br>`
    for(let u =0; u< objetoArray.length; u++){
        text += `[${u}] ${objetoArray[u]}`
    }
   document.getElementById("ejemploConstructor").innerHTML = text;

}

function funcionCopyWithin(){
    
}