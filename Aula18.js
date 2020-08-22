const fs = require("fs");

const funcaoCallbackCartas = (err, data) => {
    if (err) {
        return console.log(err);
    }
    const mensagensSeparadas = constFormatarArquivo(data);
    for (i = 0; i < mensagensSeparadas.length; i++) {
        for(j=0; j < mensagensSeparadas[i].length; j++){
        console.log('[INICIO DA MENSAGEM]');
        console.log('Remetente:', mensagensSeparadas[i][0]);
        console.log('Destinatário:', mensagensSeparadas[i][1]);
        console.log('Mensagem:', mensagensSeparadas[i][2]);
        console.log('[FIM DA MENSAGEM]');
    }
    }
}

const separarMensagens = (a) => {
    const mensagensSeparadas = a.toString().split('---');
    return mensagensSeparadas;
}

const separarLinhas = (b) => {
    linhasSeparadas = [];
    for(i=0; i < b.length; i++) {
        let linhas = b[i].split('\n');
        linhas.splice(linhas.indexOf(''),1);
        linhasSeparadas.push(linhas);
    }
    return linhasSeparadas
}

constFormatarArquivo = c => {
    const arquivoSeparado = separarMensagens(c);
    const arquivoFormatado = separarLinhas(arquivoSeparado);
    return arquivoFormatado;
}

fs.readFile("cartas.txt", funcaoCallbackCartas);

