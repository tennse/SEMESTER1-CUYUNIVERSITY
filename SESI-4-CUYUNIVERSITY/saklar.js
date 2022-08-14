function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    
  
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    
    if (toggle1.checked) {
      lampu1.src = "assets/img/on.gif"
    } else {
      lampu1.src = "assets/img/off.gif";
    }
  
    if (toggle2.checked) {
      lampu2.src = "assets/img/on.gif"
    } else {
      lampu2.src = "assets/img/off.gif";
    }
  
    if (toggle3.checked) {
      lampu3.src = "assets/img/on.gif"
    } else {
      lampu3.src = "assets/img/off.gif";
    }
    if (toggle4.checked) {
      lampu4.src = "assets/img/on.gif"
    } else {
      lampu4.src = "assets/img/off.gif";
    }
  }

  function saklarAll() {
    let toggleAll = document.getElementById("default-toggleAll");
  
    if (toggleAll.checked) {
    lampu1.src = "assets/img/on.gif"
    lampu2.src = "assets/img/on.gif"
    lampu3.src = "assets/img/on.gif"
    lampu4.src = "assets/img/on.gif"
  } else {
    lampu1.src = "assets/img/off.gif"
    lampu2.src = "assets/img/off.gif"
    lampu3.src = "assets/img/off.gif"
    lampu4.src = "assets/img/off.gif"
  }
} 