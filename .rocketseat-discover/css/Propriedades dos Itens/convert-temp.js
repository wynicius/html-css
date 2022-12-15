function Convertion() {
    let temperature = document.getElementById("temp").value;
    
    // caso seja Celsius to Fahrenheit
    if (/^.*( c|c)$/i.test(temperature)) {
 
       let tempC = Number(temperature.replace(/[cC]$/,''));
       let tempF = (tempC * 9/5 + 32).toFixed(2)          
       let modal = document.querySelector("dialog#window")
       let elementToBeShown = document.getElementById("result");
       let tempConverted =` ${tempC} °C is equal to ${tempF} °F`
    
       elementToBeShown.innerHTML = tempConverted;
       modal.showModal()
       event.preventDefault()
 
    } else if  (temperature) { 
       if (/^.*( f|f)$/i.test(temperature)) {
          let tempF = Number(temperature.replace(/[fF]$/,''));
          let tempC = ((tempF - 32) * 5/9).toFixed(2)
          let modal = document.querySelector("dialog#window")
          let elementToBeShown = document.getElementById("result");
          let tempConverted =` ${tempF} °F is equal to ${tempC} °C`;
          
          elementToBeShown.innerHTML = tempConverted;
          modal.showModal()
          event.preventDefault()
 
       }
    }
    document.getElementById("tempF").value = ''
 }
 
 // Modal com tag <dialog> mostrando a conversão
 function btnCloseC() {
    let modal = document.querySelector("dialog#window");
    modal.close();
    event.preventDefault()
 }
 
 
 // let temperature = parseInt(document.getElementById("temp").value);
    
 //    // caso seja Celsius to Fahrenheit
 //     if (!isNaN(num) && temperature.indexOf(/[cC]$/) != -1) {
 //          let tempF = (temperature * 9/5 + 32).toFixed(2)          
 //          let modal = document.querySelector("dialog#window")
 //          let elementToBeShown = document.getElementById("result");
 //          let tempConverted =` ${tempC} °C is equal to ${tempF} °F`
       
 //          elementToBeShown.innerHTML = tempConverted;
 //          modal.showModal()
 //          event.preventDefault()

