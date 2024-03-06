# Rich-utils

Este repositório contém uma coleção de utilitários em JavaScript para facilitar diversas tarefas comuns em desenvolvimento web.

## Instalação

### NPM:
```terminal
cd PastaDoProjeto
npm init
npm i Rich-utils-br
```
```javascript
const {sendMailPlus,FormataValorBRL} require ('Rich-utils)
```
## Utilitários

### sendMailPlus
- **Descrição:** Realiza o envio de e-mails utilizando a biblioteca nodemailer.
- **Exemplo de uso:**
  ```javascript
  const transporter = nodemailer.createTransport({
    host: config.configs.emailEnvio.host,
    port: config.configs.emailEnvio.port,
    secure: config.configs.emailEnvio.secure,
    auth: {
      user: emailenvio,
      pass: config.configs.emailEnvio.pass
    }
  });

  var msg = 'msg de teste';
  sendMailPlus('emailDe@email.com', 'emailPara@email2.com', 'Nova Solicitação email!', msg);

### exportTable

**Descrição:** Faz a exportação de uma tabela html que esteja utilizando o plugn datatables.

**Exemplo de Uso:**
```javascript
    exportTable('pedidosOCX', 'CSV', 'Pedido OCX, Pedido V11, Status V11, Split, Data, Cliente, Valor, Form. Pgto', 'PedidosOCX', 'N', 6);
```

**Parametros:** 
1°: id da tabela a ser exportada

2°: formato de exportação 

3°:Titulo das Colunas do arquivo 

4°:Titulo do arquivo

5°: S para remover coluna de opções ou N para não remover.

6°: Indice da coluna onde contem valores monetarios BR. 

7°: tipo de separador das colunas em caso de CSV. 
se não passado, é atribuido como default o separador ','

### FormataValorBRL
- **Descrição:** Converte valores monetários do padrão americano para o padrão brasileiro.
- **Exemplo de uso:** 
  ```javascript
  FormataValorBRL(3000.00); // Retorna R$3.000,00
### removerCaracteresEspeciais
- **Descrição:** Remove caracteres especiais de uma string passada como parâmetro.

### removerCaracteresEspeciais
- **Descrição:** Remove caracteres especiais de uma string passada como parâmetro.
- **Exemplo de uso:** 
  ```javascript
  removerCaracteresEspeciais('Não quero mais caracteres especiais!!!%$*~^`;') 
  // Retorna 'Nao quero mais caracteres especiais!!!;'```

### removerItensDuplicados
- **Descrição:** Recebe um array como parâmetro e remove os itens duplicados, retornando um novo array simplificado.
- **Exemplo de uso:** 
  ```javascript
  var array1 = [1, 2, 2, 5, 1, 7, 5];
  removerItensDuplicados(array1); // Retorna [1, 2, 5, 7]

### isEmailValid
- **Descrição:** Verifica se o email passado por parâmetro é válido.
- **Exemplo de uso:** 
  ```javascript
  isEmailValid('email@gmail.com');```

### Dataextenso
- **Descrição:** Traz a data atual por extenso.
- **Exemplo de uso:** 
  ```javascript
  Dataextenso(); // Retorno: 'terça-feira, 5 de março de 2024'```

### getdateNow
- **Descrição:** Retorna a data e hora atual no padrão americano.```

- **Exemplo de uso:** 
  ```javascript
  getdateNow();
  ```
  ### formataDataBR
- **Descrição:** Formata a data e hora passada como parâmetro do padrão americano para o padrão brasileiro.
- **Exemplo de uso:** 
  ```javascript
  formataDataBR('2024-01-01 12:55:00'); // Retorno: '01/01/2024, 12:55:00'
  ```

### FormataCPFCNPJView
- **Descrição:** Retorna CPF ou CNPJ com máscara (Utilizado em Views).
- **Exemplo de uso:** 
  ```javascript
  FormataCPFCNPJView('20649397096'); // Retorno: '206.493.970-96'
  ```
### mascaraCPFCNPJView
- **Descrição:** Aplica máscara de CPF ou CNPJ em um input passado como parâmetro.
- **Exemplo de uso:** 
  ```javascript
  const cpfInput = document.getElementById('CPf');
  mascaraCPF(cpfInput);
  ```

### mascaraTelefone
- **Descrição:** Aplica máscara de telefone ou celular em um input passado como parâmetro.
- **Exemplo de uso:** 
  ```javascript
  const telefoneInput = document.getElementById('inputTelefone');
  mascaraTelefone(telefoneInput);
```
