const button = document.getElementById("bt");
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const objetive = document.getElementById('objective');
const na = document.getElementById('na');
const nc = document.getElementById('nc');


button.addEventListener('click',
function notas(event){ 
event.preventDefault()
    let final = (n1.value*0.09) + (n2.value*0.21) + (n3.value*0.09) + (n4.value*0.21) + (n5.value*0.12) + (n6.value*0.28)  
    let necesaria = (objetive.value-final)/0.28
    if(n1.value > 5 || n2.value > 5 || n3.value > 5 || n4.value > 5 || n5.value > 5 || n6.value > 5){
        alert("Compa alguna nota es mayor de 5")
    }else{
    necesaria>0 ? nc.value = necesaria : nc.value = 0
    na.value = final
    }
})


