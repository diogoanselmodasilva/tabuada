function tabuada (){
  var num = document.getElementById('txtnumero');
  var tabuada = document.getElementById('tab')
  if(num.value.length==0){window.alert('Por favor digite um número')}
    else{
        let n =Number(num.value)
        tabuada.innerHTML=""
        for(let c=1;c<=10;c++){
            let item = document.createElement('option');
            item.text = `${n}x${c}=${n*c}`
            item.value=`tab${c}`
            tabuada.appendChild(item)
        }
    }
}