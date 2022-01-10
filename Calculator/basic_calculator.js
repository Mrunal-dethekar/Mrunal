var num1Input = document.getElementById('num1')
var num2Input = document.getElementById('num2')
var operator  = document.getElementById('operator')

// var result = document.getElementById('result') no use of this line

function calculate(){

    // Using If else (Rohan sir's method)
    // if(operator.value==='+'){
    //     result.value = parseInt(num1Input.value)+parseInt(num2Input.value)
    // }
    // else if(operator.value==='-'){
    //     result.value = parseInt(num1Input.value)-parseInt(num2Input.value)
    // }
    // else if(operator.value==='*'){
    //     result.value = parseInt(num1Input.value)*parseInt(num2Input.value)
    // }
    // else if(operator.value==='/'){
    //     result.value = parseInt(num1Input.value)/parseInt(num2Input.value)
    // }


    if(num1Input.value===''){
    alert("Please Enter no. 1")}
    if(num2Input.value===''){
    alert("Please Enter no. 2")}
    
    // Using Switch (My Method)
    switch(operator.value){
        case '+':
        result.value = parseInt(num1Input.value)+parseInt(num2Input.value);
        break;
        case '-':
        result.value = parseInt(num1Input.value)-parseInt(num2Input.value);
        break;
        case '*':
        result.value = parseInt(num1Input.value)*parseInt(num2Input.value);
        break;
        case '/':
        result.value = parseInt(num1Input.value)/parseInt(num2Input.value);
        break;
    }
}