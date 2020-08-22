const fs = require("fs");

const funcaoCallback = (err, data) => {
    if (err) {
        return console.log(err);
    } 
    const mensagensSeparadas = data.toString().split('---')
    for (i = 0; i < mensagensSeparadas.length; i++) {
        let frasesSeparadas = mensagensSeparadas[i].split('\n')
        frasesSeparadas.splice(frasesSeparadas.indexOf(''),1);
        console.log('[INICIO DA MENSAGEM]');
        console.log('Remetente:', frasesSeparadas[0]);
        console.log('Destinatário:', frasesSeparadas[1]);
        console.log('Mensagem:', frasesSeparadas[2]);
        console.log('[FIM DA MENSAGEM]');
    }
    
}

fs.readFile("cartas.txt", funcaoCallback);

