const fs = require("fs");

const cartas = constFormatarArquivo(fs.readFileSync("cartas.txt").toString());
const enderecos = constFormatarArquivo(fs.readFileSync("enderecos.txt").toString());

const funcaoCallbackCartas = (err, data) => {
    if (err) {
        return console.log(err);
    }
    const mensagensSeparadas = constFormatarArquivo(data);
    for (i = 0; i < mensagensSeparadas.length; i++) {
        console.log('[INICIO DA MENSAGEM]');
        console.log('Remetente:', mensagensSeparadas[i][0]);
        console.log('Destinatário:', mensagensSeparadas[i][1]);
        console.log('Mensagem:', mensagensSeparadas[i][2]);
        console.log('[FIM DA MENSAGEM]');
        console.log(" ")
    }
}

const mensagemComEndereco = (a, b) => {
    for (i = 0; i < a.length ; i++) {
        console.log('[INICIO DA MENSAGEM]');
        console.log('Remetente:', a[i][0]);
        console.log('Destinatário:', a[i][1]);
        for (j=0; j < b.length; j++) {
            if (b[j][0] === a[i][1]) {
                console.log('Endereço:', b[j][1]);
                break;
            } else {
                continue;
            }
        }
        console.log('Mensagem:', a[i][2]);
        console.log('[FIM DA MENSAGEM]');
        console.log(" ")
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

mensagemComEndereco(cartas, enderecos);