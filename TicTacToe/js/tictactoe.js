// esta variable realiza el seguimiento de quien es el turno 
let activePlayer = 'X';
// esta matriz almacena una serie de movimientos, se usa esto para determinar las condiciones de victoria
let selectedSquares = [];
// esta funcion es para colocar una X o un O en un cuadro
function placeXOrO(squareNumber) {
    // esta condicion garantiza que no se haya seleccionado ya un cuadro
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        // esta funcion reproduce el sonido de la ubicacion
        audio('./media/place.mp3');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function() { computersTurn(); }, 1000)
        }
        return true;
    }
    //esta funcion da como resultado la seleccion de un cuadro aleatorio
    function computersTurn() {
        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

/* esta funcion analiza la matriz para buscar condiciones ganadoras */
function checkWinConditions() {
    if      (arrayIncludes('OX', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('OX', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('OX', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('OO', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('OO', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('OO', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    // Esta condicion comprueba el empate y si no se cumple ninguna de las anteriores
    else if (selectedSquares.length >= 9) {
        // esta funcion toca el sonido
        audio('./media/tie.mp3');
        //esta funcion establece 3 segundos antes de resetearse
        setTimeout(function() { resetGame (); }, 1000);
    }
    //esta funcion comprueba que sean 3 cadenas si fueron usadas cada una de las condiciones
    function arrayIncludes(squareA, squareB, squareC) {
        //estas 3 variables se usan para checar si 3 estan en linea
        const a =selectedSquares.includes(squareA)
        const b =selectedSquares.includes(squareB)
        const c =selectedSquares.includes(squareC)
        //si las variables pasan y estan incluidas en la matriz regresa a nuestra condicion para dibujar la linea (drawWinLine)
        if (a === true && b === true && c === true) { return true }
    }
}

// esta funcion hace que no se pueda hacer click en el cuerpo del juego temporalmente
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//esta funcion toma un parametro de la cadena que establecio anteriormente para el lugar del sonido
function audio(audioURL) {
    //aqui creamos el nuevo audio
    let audio = new Audio(audioURL);
    audio.play();
}

//esta funcion usa html canvas para dibujar lineas
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //esta linea arroja el elemento canvas
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;

    //esta funcion interactua con canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo (x1, y1)
        c.lineTo (x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba (70, 255, 33, .8)';
        c.stroke();
        // esta condicion comprueba si hemos llegado al punto final
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {x += 10; }
            if (y < y2) {y += 10; }
            //esta condicion cancela la animacion 
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        } 
        //esta condicion es similar a la anterior, es necesaria para la validacion de las condiciones para ganar 6, 4, 2
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //esta condicion limpia el canvas despues de ganar y ser dibujada la linea
    function clear() {
        //aqui comienza la animacion 
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        //esta linea detiene el ciclo de la animacion
        cancelAnimationFrame(animationLoop);
    }
    //esta linea no permite hacer click mientras el sonido de win esta sonando
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function() { clear(); resetGame(); }, 1000);
}

// esta funcion reinicia el juego despues de empatar o ganar
function resetGame() {
    //este loop itera cada elemento del cuadro
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];
}