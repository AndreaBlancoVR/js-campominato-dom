// VARIABILI
let difficulty = document.getElementById('difficulty');
const BUTTON = document.getElementById('button');
const GRID = document.getElementById('grid');
let celleXRiga = 0;

// bottone

BUTTON.addEventListener('click',function() {
    // creo comando per liberare la griglia ad ogni click
    GRID.innerHTML = ('')

    // importo la difficoltà selezionata dall'utente
    const LVL_TEMP = difficulty.value;
    

    // creo variabile per il numero totale di celle in base alla difficoltà scelta
    if( LVL_TEMP === 'easy' ) {
        celleXRiga = 10;        
    }
    else if( LVL_TEMP === 'hard' ) {
        celleXRiga = 9;
    }
    else if( LVL_TEMP === 'crazy' ) {
        celleXRiga = 8;
    }
    let celleTot = celleXRiga**2;

    // creo celle, le formatto e le inserisco nel container
    for( let i = 1; i<celleTot+1; i++) {
        const SQUARE = document.createElement('div');
        SQUARE.addEventListener('click', squareClick);
        SQUARE.classList.add('square');
        SQUARE.style.width = `calc( 100% / ${celleXRiga} )`;
        SQUARE.innerHTML = (i);
        GRID.append( SQUARE );
    }

})

function squareClick() {
    this.style.backgroundColor = 'white';
}



