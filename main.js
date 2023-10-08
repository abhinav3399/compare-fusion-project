for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = "₹ " + product[a].price
        document.getElementById("networks1").innerHTML = product[a].networks
        document.getElementById("performance1").innerHTML = product[a].performance
        document.getElementById("display1").innerHTML = product[a].display
        document.getElementById("rearcamera1").innerHTML = product[a].rearcamera
        document.getElementById("frontcamera1").innerHTML = product[a].frontcamera
        document.getElementById("battery1").innerHTML = product[a].battery
        document.getElementById("memory1").innerHTML = product[a].memory
        document.getElementById("rom1").innerHTML = product[a].rom
        document.getElementById("disc1").innerHTML = product[a].disc
       
    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("price1").innerHTML = ""
        document.getElementById("networks1").innerHTML = ""
        document.getElementById("performance1").innerHTML = ""
        document.getElementById("display1").innerHTML = ""
        document.getElementById("rearcamera1").innerHTML = ""
        document.getElementById("frontcamera1").innerHTML = ""
        document.getElementById("battery1").innerHTML = ""
        document.getElementById("memory1").innerHTML = ""
        document.getElementById("rom1").innerHTML = ""
        document.getElementById("disc1").innerHTML = ""

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = product[a].image
        document.getElementById("price2").innerHTML = "₹ " + product[a].price
        document.getElementById("networks2").innerHTML = product[a].networks
        document.getElementById("performance2").innerHTML = product[a].performance
        document.getElementById("display2").innerHTML = product[a].display
        document.getElementById("rearcamera2").innerHTML = product[a].rearcamera
        document.getElementById("frontcamera2").innerHTML = product[a].frontcamera
        document.getElementById("battery2").innerHTML = product[a].battery
        document.getElementById("memory2").innerHTML = product[a].memory
        document.getElementById("rom2").innerHTML = product[a].rom
        document.getElementById("disc2").innerHTML = product[a].disc

    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product[0].image
        document.getElementById("price2").innerHTML = ""
        document.getElementById("networks2").innerHTML = ""
        document.getElementById("performance2").innerHTML = ""
        document.getElementById("display2").innerHTML = ""
        document.getElementById("rearcamera2").innerHTML = ""
        document.getElementById("frontcamera2").innerHTML = ""
        document.getElementById("battery2").innerHTML = ""
        document.getElementById("memory2").innerHTML = ""
        document.getElementById("rom2").innerHTML = ""
        document.getElementById("disc2").innerHTML = ""
    }
}
// document.addEventListener("orientationchange", function(event){
//     switch(window.orientation) 
//     {  
//         case -90: case 90:
//             /* Device is in landscape mode */
//             break; 
//         default:
//             /* Device is in portrait mode */
//     }
// });