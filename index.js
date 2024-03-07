// remove os caracteres especiais de uma string 
const nodemailer = require('nodemailer')

const removerCaracteresEspeciais= (texto)=> {
const regex = /[^a-zA-Z0-9.,&°<>()\[\]{}\/"'?!;:\s\n]/g;
   const textoLimpo = texto.normalize('NFD').replace(regex, '');
  return textoLimpo;
}

// remove os itens duplicados de um array
const removerItensDuplicados=(array)=> {
  // Cria um novo conjunto a partir do array para manter valores únicos
  const conjunto = new Set(array);

  // Converte o conjunto de volta para um array
  const arraySemDuplicados = [...conjunto];

  return arraySemDuplicados;
}

// verifica se o email é valido 
const isEmailValid=(email)=>{
  // Expressão regular para verificar se o email é válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}



// retorna a data por extenso
const Dataextenso=async ()=>{

const meses = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

const diasDaSemana = [
  'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
  'quinta-feira', 'sexta-feira', 'sábado'
];


  const data = new Date()
  const dia = data.getDate();
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();
  const diaDaSemana = diasDaSemana[data.getDay()];

  return `${diaDaSemana}, ${dia} de ${mes} de ${ano}`;
}

// retorna data atual com padrão americano 
const getdateNow = async () => {
  var agora = new Date();
  var dia = agora.getDate();
  var mes = agora.getMonth() + 1; // Adicione 1 para corrigir o mês
  var ano = agora.getFullYear();
  var horas = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();

  // Formate a data e hora com zero à esquerda, se necessário
  var dataFormatada = `${ano}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')} ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  return dataFormatada;
};

// recebe a data e hora no padrão americano e retorna o padrão BR
const formataDataBR = (dateX) => {
    var date = new Date(dateX);

    // Configura a zona horária para São Paulo
    var opcoesDeFusoHorario = { timeZone: 'America/Sao_Paulo' };

    // Format the date to Brazilian date format (dd/mm/yyyy) in São Paulo timezone
    var formattedDate = date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Sao_Paulo', // Set the correct time zone
    });

    return formattedDate;
};

// retornar CPF ou CNPJ com mascaraCPF (Utilizado em Views)
const FormataCPFCNPJView = (valuex) => {
    let value = valuex.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length <= 11) {
        // Formatando CPF
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
        // Formatando CNPJ
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    return value;
};


// aplica mascara de CPF ou CNPJ de acordo com a quantidade de caracteres enviados no input que tider sido enviado como parametro
const mascaraCPFCNPJ = (inputValue) => {
   CPFCNPJInput.addEventListener('input', function() {
        let value = CPFCNPJInput.value;
     value = value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length <= 11) {
        // Formatando CPF
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
        // Formatando CNPJ
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    CPFCNPJInput.value = value
   })
};
/*modo de uso
const cpfInput = document.getElementById('CPf');
mascaraCPF(cpfInput);*/


// aplica mascara de Celular ou telefone de acordo com a quantidade de caracteres enviados no input que tider sido enviado como parametro
function mascaraTelefone(telefoneInput) {
    telefoneInput.addEventListener('input', function() {
        let value = telefoneInput.value;
        value = value.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (value.length === 11) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else {
            value = value.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
        telefoneInput.value = value;
    });
}
/* Aplicando a máscara de Telefone/Celular
const telefoneInput = document.getElementById('inputTelefone');
mascaraTelefone(telefoneInput);*/

//  formata do padrão 3000 para R$ 3.000,00 por exemplo 
const FormataValorBRL = async(valor) =>{
valorTotal = parseFloat(valor)

    var formattedValue = valorTotal.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            });

return formattedValue

}

// exporta tabela HTML com que usa o plugin datatables
const exportTable = (tableId, format, cabecalho, nomeArquivo, exclude, columnIndexReais = -1,separator = ',') => {
    // Seleciona o elemento da tabela pelo ID
    var table = $('#' + tableId).DataTable();

    // Array para armazenar os dados CSV
    var csv_data = [];

    var title = cabecalho;
    csv_data.push(title);

    // Loop através de cada linha da tabela
    table.rows().every(function() {
        var data = this.data();
        var csvrow = [];
        switch (exclude) {
            case 'N':
                for (var i = 0; i < data.length ; i++) {
                    // Verifica se a formatação de reais é necessária e aplica-a, se for o caso
                    if (columnIndexReais !== -1 && i === columnIndexReais) {
                        var valorFormatado = data[i].replace('R$', '').replace('.', '').replace(',', '.').replace('&nbsp;', '').toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                            // valorFormatado = parseFloat(valorFormatado)
                            
                        csvrow.push(valorFormatado); // Adiciona o valor formatado da célula ao array csvrow
                    } else {
                        csvrow.push(data[i].replace('&amp', '&').replace(';', '')); // Adiciona o valor da célula ao array csvrow
                    }
                }
                break;

            default:
                for (var i = 0; i < data.length - 1; i++) {
                    // Verifica se a formatação de reais é necessária e aplica-a, se for o caso
                    if (columnIndexReais !== -1 && i === columnIndexReais) {
                        var valorFormatado = parseFloat(data[i].replace('R$', '').replace('.', '').replace(',', '.').replace('&nbsp;', '')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                        csvrow.push(valorFormatado);
                    } else {
                        csvrow.push(data[i].replace('&amp', '&').replace(';', ''));
                    }
                }
                break;
        }
        // Adiciona a linha de dados ao array csv_data
        csv_data.push(csvrow.join(separator)); 
    });

    // Combina cada dado de linha com uma quebra de linha
    csv_data = csv_data.join('\n');

    // Cria um elemento de link para fazer o download dos dados exportados
    var link = document.createElement('a');
    // Cria um blob com os dados no formato adequado
    var blob = new Blob([csv_data], { type: 'text/csv' });
    link.href = URL.createObjectURL(blob);
    var agora = new Date();
    var dataF = `${nomeArquivo}_${agora.getFullYear()}_${agora.getMonth()}_${agora.getDay()}__${agora.getHours()}_${agora.getMinutes()}_${agora.getSeconds()}`;
    link.download = `${dataF}.${format}`;

    // Simula um clique no link para iniciar o download
    link.click();
}

// forma de uso exportTable('pedidosOCX', 'CSV', 'Pedido OCX, Pedido V11, Status V11, Split, Data, Cliente, Valor, Form. Pgto', 'PedidosOCX', 'N', 6)


//  função que envia email utilizando o node e o pacote nodemailer
const sendMailPlus = async(emailTo,emailFrom,title, Mensagem,transporterCnf)=>{
  var toX = emailTo
  var msg = Mensagem
  var fromX= emailFrom
  var title = title
  var agora = new Date();
  var dataAtual = `${agora.getFullYear()}-${('0' + (agora.getMonth() + 1)).slice(-2)}-${('0' + agora.getDate()).slice(-2)} as ${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`;
  msg +=`<br> Email enviado ${dataAtual}`
  let mailOptions = {
    from: fromX,
    to: toX,
    subject: title,
    html: msg
  };

// config transporter 

const transporter = nodemailer.createTransport(transporterCnf);


// console.log(mailOptions)
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      // console.log('Email enviado: ' + info.response);
      console.log(`email enviado para (${toX})`);
    }
  });
  
}


/*forma de uso :
const transporter = nodemailer.createTransport({
  host: config.configs.emailEnvio.host, // substitua pelo host do seu provedor de email
  port: config.configs.emailEnvio.port, // substitua pela porta adequada do seu provedor de email
  secure:config.configs.emailEnvio.secure, 
  auth: {
    user: emailenvio,
    pass: config.configs.emailEnvio.pass
  }
});

var msg='msg de teste'
sendMailPlus('email@email.com','email2@email2.com','Nova Solicitação email!',msg)

*/




module.exports = {
  sendMailPlus,
  exportTable,
  FormataValorBRL,
  removerCaracteresEspeciais,
  removerItensDuplicados,
  isEmailValid,
  Dataextenso,
  getdateNow,
  formataDataBR,
  FormataCPFCNPJView,
  mascaraCPFCNPJ,
  mascaraTelefone
};

