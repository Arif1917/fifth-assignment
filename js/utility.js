function getElementById(id){
    const value =document.getElementById(id).innerText;
    return value
}

function setInnerTextByIdAndValue(id, value){
   const setValue=document.getElementById(id).innerText= value;
   console.log(setValue)
}