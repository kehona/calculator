

   
let txtInput = document.getElementById('txt_input');
let txtResult = document.getElementById('txt_result');
    
let num1, num2 = 0;
let operation = "";
let reset = false;

initialize();

function initialize() {
    txtInput.value = 0;
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button_${i}`).addEventListener('click', (e) => {
            txtInput.value === "0" | reset ? txtInput.value = i : txtInput.value += i
            reset ? txtResult.value = i : txtResult.value += i ;
            //  set reset false when there's a new entry
            reset = false;
        }, false)
    }
    document.getElementById('button_plus').addEventListener('click', operate, false);
    document.getElementById('button_multiply').addEventListener('click', operate, false);
    document.getElementById('button_minus').addEventListener('click', operate, false);
    document.getElementById('button_clear').addEventListener('click', clear, false);
    document.getElementById('button_equals').addEventListener('click', performOperation, false);
}

 function operate(e){
    // get existing input value and set as num1
    num1 = txtInput.value;
    txtInput.value = 0;
    operation = this.innerHTML;
    txtResult.value += this.innerHTML;
}

function clear() {
    txtInput = document.getElementById('txt_input');
    console.log(txtInput);
    txtInput.value = '0';
}

function performOperation() {
    num2 = txtInput.value;
    if (operation === "+") {
        console.log("adding", num1, "and", num2)
        txtInput.value = Number.parseInt(num1) + Number.parseInt(num2);
    } else if (operation === "*") {
        txtInput.value = Number.parseInt(num1) * Number.parseInt(num2);
    }
    else if (operation === "-") {
        txtInput.value = Number.parseInt(num1) - Number.parseInt(num2);
    }
    // after an operation is performed, reset is set to true so that the next entry wipes out existing data
    reset = true;
}


