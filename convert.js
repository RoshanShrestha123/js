var input=document.getElementById("input");
var result =document.getElementById("result");
var inputType= document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue=inputType.value;
resultTypeValue=inputType.value;

function myResult(){
    inputTypeValue=inputType.value;
    resultTypeValue=inputType.value;
  alert("ok")
;     if (inputTypeValue==="meter" && resultTypeValue==="kilometer") {
         result.value=Number(input.value)*0.001;

     }
     elseif(inputTypeValue==="meter" && resultTypeValue==="centimeter"){
        result.value =Number(input.value)*100;
     }
     elseif(inputTypeValue==="meter" && resultTypeValue==="meter"){
        result.value =input.value;
     }

     if (inputTypeValue==="kilometer" && resultTypeValue==="meter") {
        result.value=Number(input.value)*1000;

    }
    elseif(inputTypeValue==="kilometer" && resultTypeValue==="centimeter"){
       result.value =Number(input.value)*100000;
    }
    elseif(inputTypeValue==="kilometer" && resultTypeValue==="kilometer"){
       result.value =input.value;
    }

    if (inputTypeValue==="centimeter" && resultTypeValue==="kilometer") {
        result.value=Number(input.value)*0.00001;

    }
    elseif(inputTypeValue==="centimeter" && resultTypeValue==="kilometer"){
       result.value =Number(input.value)*0.01;
    }
    elseif(inputTypeValue==="centimeter" && resultTypeValue==="centimeter"){
       result.value =input.value;
    }