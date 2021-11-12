// almacena un objeto para realizar un seguimiento de los valores
const Calculator = {
    // esto se muestra 0 en la pantalla
    Display_Value: '0',
    // esto contendrá la primera operación y para cualquier expresión, lo establecemos en nulo para
    First_Operand: false,
    // esto mantendrá el operador, lo configuramos como nulo por ahora
    operator: null,
    };

    // esto modifica los valores cada vez que se hace clic en un botón
    function Input_Digit(digit){
        const { Display_Value, Wait_Second_Operand } = Calculator;
        // estamos comprobando si esperar el segundo operando es verdadero y establecemos
        // muestra el valor de la clave en la que se hizo clic
        if(Wait_Second_Operand === true){
            Calculator.Display_Value = digit;
            Calculator.Wait_Second_Operand = false;

        } else {
            // esto sobrescribe el valor de visualización si el valor actual es 0
            // de lo contrario, se agrega
            Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;

        }
    }
    // esta sección maneja puntos decimales
    function Input_Decimal (dot){
        // esto asegura que el clic accidental del punto decimal
        // no causa errores en su operación
        if (Calculator.Wait_Second_Operand === true) return;
        if(!Calculator.Display_Value.includes(dot)){
            // estamos diciendo que si el valor de visualización no contiene un punto decimal
            // queremos agregar un punto decimal
            Calculator.Display_Value += dot;
        }
    }

     // esta sección maneja operadores
    function Handle_Operator(Next_Operator){
        const { First_Operand, Display_Value, operator}=Calculator
        // cuando se presiona una tecla de operador, convertimos el número actual
        // se muestra en la pantalla a un número y luego almacena el resultado en
        // calculator.firtoperand si aún no existe
        const Value_of_Input = parseFloat(Display_Value);
        // verifica si ya existe un operador y si esperar segundo operando es verdadero
        // luego actualiza el operador y existe desde la función
        if (operator && Calculator.Wait_Second_Operand) {
            Calculator.operator = Next_Operator;
            return;
        }
        if (First_Operand == null){
            Calculator.First_Operand = Value_of_Input;
        }else if (operator) {
            // comprueba si ya existe un operador
            const Value_Now = First_Operand || 0 ;
            // si el operador existe, la búsqueda de propiedades se realiza para el operador
            // en el objeto de realizar el cálculo y la función que coincide con el
            // se ejecuta el operador
            let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
            // aquí agregamos una cantidad fija de número después del decimal
            result = Number(result).toFixed(9)
            // esto eliminará los ceros finales
            result = (result * 1).toString()
            Calculator.Display_Value = parseFloat(result);
            Calculator.First_Operand = parseFloat(result);
            
        }
        Calculator.Wait_Second_Operand = true;
        Calculator.operator = Next_Operator;

    }

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// esta funcion actualiza la pantalla con el contenido de Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//esta seccion supervisa los clics de los botones
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // la variable de destino respresenta un objeto al que se le hizo click
    const { target } = event;
    // si al elemento al que se le hizo click no es un boton, salga de la funcion
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    // asegura que AC borre los numeros de la calculadora
    if (target.classList.contains('all-clear')) {
        Calculator_Reset(target.value);
        Update_Display();
        return;
    }

    Input.Digit(target.value);
    Update_Display();
})