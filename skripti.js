console.log("tests")
//alert(1)

//( ) nosaukumu raksra CSS stilā
let z = document.querySelector("#zina");
//lai pārbaudītu vai darbojas 7.r. saturu iekopē console un nospiež enter, ja ziņa laukā kaut kas ir ierakstīts tas tiks izvadīts
let logs = document.querySelector(".chataZinas");

function sutitZinu(){
    console.log("Poga darbojas");

    logs.innerHTML = logs.innerHTML + "</br>" + z.value;
}

async function ieladetZinas(){
    let datiNoServera = await fetch("zinas.txt");
    //.text datus no severa parāda kā tekstu
    let dati = await datiNoServera.text();
    console.log(dati);
    logs.innerHTML = dati;
}