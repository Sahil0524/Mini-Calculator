function appendToDisplay(input){
    const display = document.getElementById("display");
    display.value += input;
    console.log(input, display.value);
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{display.value = eval(display.value);

    }
    catch(error){
        display.value="Error";
    }
} 
