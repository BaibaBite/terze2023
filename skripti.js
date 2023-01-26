console.log("tests")
//alert(1)
function sutitZinu(){
    console.log("Poga darbojas");

    //( ) nosaukumu raksra CSS stilā
    let z = document.querySelector("#zina");
    //lai pārbaudītu vai darbojas 7.r. saturu iekopē console un nospiež enter, ja ziņa laukā kaut kas ir ierakstīts tas tiks izvadīts
    let logs = document.querySelector(".chataZinas");

    logs.innerHTML = logs.innerHTML + "</br>" + z.value;
}