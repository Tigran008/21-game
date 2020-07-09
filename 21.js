


window.onload = function () {

    var htag = document.getElementById('htag')
    var htag1 = document.getElementById('htag1')
    htag.innerHTML = prompt('Type Red player name') 
    htag1.innerHTML = prompt('Type Blue player name')
    htag.style.marginLeft = '50px'
    htag.style.marginBottom = '30px'
    htag.style.textShadow = '2px 2px'
    htag1.style.textShadow = '2px 2px'
    htag1.style.marginLeft = '50px'
    
    
    
var h1 = document.getElementById('h1');
h1.style.fontSize = '200px'
h1.style.textAlign = 'center'
h1.style.marginBottom = '180px'
h1.style.textShadow = '2px 2px 15px'








var btn1 = document.getElementById('btn1')
btn1.style.width = '140px'
btn1.style.height = '80px'
btn1.style.fontSize = '50px'
btn1.style.marginLeft = '50px'

btn1.onclick = function () {
    h1.innerHTML = h1.innerHTML-1*(-1)
    h1.style.color = 'tomato'
    btn1.disabled = true
    btn2.disabled = true
    btn3.disabled = true
    btn4.disabled = false
    btn5.disabled = false
    btn6.disabled = false

    if (h1.innerHTML>=21){
        swal( htag1.innerHTML, {
            icon: "success",
            title: "The Blue Player Win:"
            }).then(okay => {
            if (okay) {
                window.location.reload();
            }
        });
      
    } 


    if ( h1.innerHTML==20) {
        btn5.disabled = true
        btn6.disabled = true
    }

    if ( h1.innerHTML==19) {
        btn6.disabled = true
    }

}




var btn2 = document.getElementById('btn2')
btn2.style.width = '140px'
btn2.style.height = '80px'
btn2.style.fontSize = '50px'

btn2.onclick = function () {
    h1.innerHTML = h1.innerHTML-2*(-1)
    h1.style.color = 'tomato'
    btn1.disabled = true
    btn2.disabled = true
    btn3.disabled = true
    btn4.disabled = false
    btn5.disabled = false
    btn6.disabled = false
    
    if (h1.innerHTML>=21){
        swal( htag1.innerHTML, {
            icon: "success",
            title: "The Blue Player Win:"
            }).then(okay => {
            if (okay) {
                window.location.reload();
            }
        });
      
    } 

    if ( h1.innerHTML==20) {
        btn5.disabled = true
        btn6.disabled = true
    }

    if ( h1.innerHTML==19) {
        btn6.disabled = true
    }
}






var btn3 = document.getElementById('btn3')
btn3.style.width = '140px'
btn3.style.height = '80px'
btn3.style.fontSize = '50px'

btn3.onclick = function () {
    h1.innerHTML = h1.innerHTML-3*(-1)
    h1.style.color = 'tomato'
    btn1.disabled = true
    btn2.disabled = true
    btn3.disabled = true
    btn4.disabled = false
    btn5.disabled = false
    btn6.disabled = false

   if (h1.innerHTML>=21){
        swal( htag1.innerHTML, {
            icon: "success",
            title: "The Blue Player Win:"
            }).then(okay => {
            if (okay) {
                window.location.reload();
            }
        });
      
    } 
    if ( h1.innerHTML==20) {
        btn5.disabled = true
        btn6.disabled = true
    }

    if ( h1.innerHTML==19) {
        btn6.disabled = true
    }
}







var btn4 = document.getElementById('btn4')
btn4.style.width = '140px'
btn4.style.height = '80px'
btn4.style.fontSize = '50px'
btn4.style.marginLeft = '420px'

btn4.onclick = function () {
    h1.innerHTML = h1.innerHTML-1*(-1)
    h1.style.color = '#0080FF'
    btn1.disabled = false
    btn2.disabled = false
    btn3.disabled = false
    btn4.disabled = true
    btn5.disabled = true
    btn6.disabled = true

    if (h1.innerHTML>=21){
        swal( htag.innerHTML, {
            icon: "success",
            title: "The Red Player Win:"
            }).then(okay => {
            if (okay) {
                window.location.reload();
            }
        });
      
    } 

    if ( h1.innerHTML==20) {
        btn2.disabled = true
        btn3.disabled = true
    }
    if ( h1.innerHTML==19) {
        btn3.disabled = true
    }
}






var btn5 = document.getElementById('btn5')
btn5.style.width = '140px'
btn5.style.height = '80px'
btn5.style.fontSize = '50px'

btn5.onclick = function () {
    h1.innerHTML = h1.innerHTML-2*(-1)
    h1.style.color = '#0080FF'
    btn1.disabled = false
    btn2.disabled = false
    btn3.disabled = false
    btn4.disabled = true
    btn5.disabled = true
    btn6.disabled = true

    if (h1.innerHTML>=21){
        swal( htag.innerHTML, {
            icon: "success",
            title: "The Red Player Win:"
            }).then(okay => {
            if (okay) {
                window.location.reload();
            }
        });
      
    } 

    if ( h1.innerHTML==20) {
        btn2.disabled = true
        btn3.disabled = true
    }
    if ( h1.innerHTML==19) {
        btn3.disabled = true
    }
}





var btn6 = document.getElementById('btn6')
btn6.style.width = '140px'
btn6.style.height = '80px'
btn6.style.fontSize = '50px'

btn6.onclick = function () {
    h1.innerHTML = h1.innerHTML-3*(-1)
    h1.style.color = '#0080FF'
    btn1.disabled = false
    btn2.disabled = false
    btn3.disabled = false
    btn4.disabled = true
    btn5.disabled = true
    btn6.disabled = true

    if (h1.innerHTML>=21){
        swal( htag.innerHTML, {
            icon: "success",
            title: "The Red Player Win:"
            }).then(okay => {
            if (okay) {
                window.location.reload();
            }
        });
      
    } 

    if ( h1.innerHTML==20) {
        btn2.disabled = true
        btn3.disabled = true
    }
    if ( h1.innerHTML==19) {
        btn3.disabled = true
    }

}




}