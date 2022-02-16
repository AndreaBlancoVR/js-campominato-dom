
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




// bottone

BUTTON.addEventListener('click',function() {
    // creo comando per liberare la griglia ad ogni click
    GRID.innerHTML = ('')
    const BOMB = []
    // importo la difficoltà selezionata dall'utente
    const LVL_TEMP = difficulty.value;
 
    function squareClick() {
        console.log(this.innerHTML)
        const TempElement = this 
        console.log( TempElement )

        if( BOMB.includes (parseInt (TempElement.innerHTML) ) ) {
            TempElement.classList.add('bomb');
        }
        else { TempElement.classList.add('selected');
        }
     }

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
        SQUARE.addEventListener('click', squareClick);
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


    




