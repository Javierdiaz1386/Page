const button = document.getElementById("bt");
const na = document.getElementById('na');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');

button.addEventListener('click',
function notas(event){ 
event.preventDefault()
    let final = (n1.value*0.09) + (n2.value*0.21)   
   
    if(n1.value > 5 || n2.value > 5 ){
        alert("Compa alguna nota es mayor de 5")
    }else{
        na.value = final
    }

    if(final>=1.2){
        na.style.border="2px solid #087643"
    }else{
        na.style.border="2px solid red"

    }
})
