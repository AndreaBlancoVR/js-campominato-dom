
// FUNZIONI
function randomNumber(min, max) {
    min = Math.ceil(min) ;
    max = Math.floor(max) ;
    return Math.floor(Math.random() * ( max - min + 1 ) + min);
}


// VARIABILI
let difficulty = document.getElementById('difficulty');
const BUTTON = document.getElementById('button');
const GRID = document.getElementById('grid');
let celleXRiga = 0;
let score = 0




// bottone

BUTTON.addEventListener('click',function() {
    // creo comando per liberare la griglia ad ogni click
    GRID.innerHTML = ('')
    const BOMB = []
    // importo la difficoltà selezionata dall'utente
    const LVL_TEMP = difficulty.value;

    //creo funzione per da richiamare con l'eventListener sul GRID container
    function squareClick(e) {
        // console.log(this.innerHTML)
        // const TempElement = this
        const TempElement = e.target
        // console.log( TempElement )

        // creo controllo per vedere la coincidenza tra n° dataset e n° bomba (nell'array BOMB) 
        if( BOMB.includes(parseInt(TempElement.dataset.number) ) ) { //se conincide
            TempElement.classList.add('bomb');
            GRID.removeEventListener("click", squareClick);
            // creo array (in realtà è un HTMLCollection) con tutte le caselle 
            const arraySquares = document.getElementsByClassName("square");
            // creo ciclo per confrontare i numeri delle caselle nell'array con quelli presenti nell'array delle bombe
            for(let i = 0; i < arraySquares.length; i++) {
                const square = arraySquares[i];
                // se i numeri coincidono, aggiungio classe bomb
                if( BOMB.includes( i + 1) ) {
                    square.classList.add('bomb');
                }
                // square.removeEventListener("click", squareClick);
            }
            alert (`Game Over!\nHai collezionato ${score} Punti!`)
        }
        else { // se non coincide
            TempElement.classList.add('selected');
            score++
            if( score === celleTot-16 ) {
                alert ('Congratulazioni! Hai vinto!')
            }

        }
    }

    GRID.addEventListener('click', squareClick);


    // creo variabile per il numero totale di celle in base alla difficoltà scelta
    if( LVL_TEMP === 'easy' ) {
        celleXRiga = 10;
    }
    else if( LVL_TEMP === 'hard' ) {
        celleXRiga = 9;
    }
    else if( LVL_TEMP === 'crazy' ) {
        celleXRiga = 7;
    }
    let celleTot = celleXRiga**2;

    // creo celle, le formatto e le inserisco nel container
    for( let i = 1; i<celleTot+1; i++) {
        const SQUARE = document.createElement('div');
        // SQUARE.addEventListener('click', squareClick);
        SQUARE.dataset.number = i;
        SQUARE.classList.add('square');
        SQUARE.style.width = `calc( 100% / ${celleXRiga} )`;
        SQUARE.innerHTML = (i);
        GRID.append( SQUARE );
    }

    // bombe
    //creo 16 bombe e le pusho nell'array se non sono già presenti BOMB
    do {
        const b = randomNumber (1, celleTot);
        if( !BOMB.includes( b ) ) {
            BOMB.push( b );
        }
    } while ( BOMB.length < 16 )
    console.log( BOMB )

})







