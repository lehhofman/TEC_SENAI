function traduzirMorse(texto) {

    var codigoMorse = {

        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.',
        'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.',
        'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-',
        'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
        
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': ' '

    };
    
    var morse = '';

    for (var i = 0; i < texto.length; i++) {

        morse += codigoMorse[texto[i].toLowerCase()] + '  ' + '  ';

    }

    return morse;

}

function enviar() {

    var texto = document.getElementById('texto').value;
    var morse = traduzirMorse(texto);

    document.getElementById('morse').innerHTML = morse;
    
}