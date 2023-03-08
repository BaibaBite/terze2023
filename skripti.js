console.log("tests")
//alert(1)


//application programming interface (API) is a way for two or more computer programs to communicate with each other
const API = "https://terzesana2023.baibabite.repl.co"
//( ) nosaukumu raksra CSS stilā
let z = document.querySelector("#zina");
//lai pārbaudītu vai darbojas 7.r. saturu iekopē console un nospiež enter, ja ziņa laukā kaut kas ir ierakstīts tas tiks izvadīts
let logs = document.querySelector(".chataZinas");
let vards =document.querySelector("#vards");

function sutitZinu(){
    console.log("Poga darbojas");

    logs.innerHTML = logs.innerHT
    fetch (API + '/sutit/' + vards.ML + "</br>" + z.value;
value + '/' + z.value)
}

async function ieladetZinas(){
    let datiNoServera = await fetch(API + '/lasit');
    //.text datus no severa parāda kā tekstu
    let dati = await datiNoServera.text();
    //console.log(dati);
    logs.innerHTML = dati;
}

async function ieladetZinasJson(){
    let datiNoServera = await fetch(API + '/lasit');
    //.text datus no severa parāda kā tekstu
    let dati = await datiNoServera.json();
    //console.log(await dati);
    
    //treniņš ziņu iegūšanai no Json
    //console.log(await dati[0]['zina'])


    //iztīra ziņas
    logs.innerHTML="";
    var i = 0;
    while (i < await dati.length){
        //console.log(i);
        logs.innerHTML = logs.innerHTML + dati[i]['vards'] +": "+ dati[i]['zina'] + "</br>";
        i = i+1;
    }
    logs.scrollTop = logs.scrollHeight;
}

//reizi sekundē izpildi funkciju ieladetZinas, aiz komata milisekindēs norāda laiku
setInterval(ieladetZinasJson, 1000)