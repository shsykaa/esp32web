const endpoint = "http://192.168.43.245";

function getKamarLamp(){
    fetch(endpoint + "/kamar").then(response => response.text()).then(result => {
        if (result == "OFF"){
            lampKamar.style.backgroundColor="blue";
            kamarledimage.src="./assets/led-on.png";
        }
        else{
            lampKamar.style.backgroundColor="#579fff";
            kamarledimage.src="./assets/led-off.png";
        }
    });
}

function getTerasLamp(){
    fetch(endpoint + "/teras").then(response => response.text()).then(result => {
        if (result == "OFF"){
            lampTeras.style.backgroundColor="blue";
            terasledimage.src="./assets/led-on.png";
        }
        else{
            lampTeras.style.backgroundColor="#579fff";
            terasledimage.src="./assets/led-off.png";
        }
    });
}

function getDapurLamp(){
    fetch(endpoint + "/dapur").then(response => response.text()).then(result => {
        if (result == "OFF"){
            lampDapur.style.backgroundColor="blue";
            dapurledimage.src="./assets/led-on.png";
        }
        else{
            lampDapur.style.backgroundColor="#579fff";
            dapurledimage.src="./assets/led-off.png";
        }
    });
}

function getRuangLamp(){
    fetch(endpoint + "/ruang").then(response => response.text()).then(result => {
        if (result == "OFF"){
            lampRuangtamu.style.backgroundColor="blue";
            ruangledimage.src="./assets/led-on.png";
        }
        else{
            lampRuangtamu.style.backgroundColor="#579fff";
            ruangledimage.src="./assets/led-off.png";
        }
    });
}


function setKamarLamp(){
    fetch(endpoint + "/kamar", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}
function setTerasLamp(){
    fetch(endpoint + "/teras", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}
function setDapurLamp(){
    fetch(endpoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}
function setRuangTamuLamp(){
    fetch(endpoint + "/ruang", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

getKamarLamp();
getDapurLamp();
getTerasLamp();
getRuangLamp();
