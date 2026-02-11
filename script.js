const input= document.getElementById("input");

function inputvalue(value){
    input.value += value;
}
function ac(){
    input.value = "";
}
function del(){
    input.value = input.value.slice(0,-1);
}
function calculate(){
    try{
        input.value =eval(input.value);
    }
    catch{
        input.value = "Error";
    }
}