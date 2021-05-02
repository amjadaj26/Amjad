var inputLabel = document.getElementById('amjad')
function pushBtn(obj){
    var pushed = obj.innerHTML
    if (pushed == '='){
        //calculate
        inputLabel.innerHTML= eval(inputLabel.innerHTML)
    }
    else if(pushed == 'C'){
        //clear
        inputLabel.innerHTML='0'

    }
    else {
        if (inputLabel.innerHTML=='0'){
            inputLabel.innerHTML=pushed

        }
        else{
            inputLabel.innerHTML += pushed 
        }
    }
}