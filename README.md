# Sistema de gastos residenciais
  Este é um projeto de para gerenciar gastos residenciais feito em **Node.js** utilizando **Express** e um banco de dados em memória.

## O projeto permite:
 - Cadastro, Listagem e Exclusão de Pessoas
 - Cadastro, Listagem de Transações (despesa e receita)
 - Listagem de totais (despesa, receita, saldo por pessoa e saldo geral)

## Como Configurar e Executar o Projeto

### Pré-requisitos
 - **Node.js**
 - **JavaScript**

### Instalação
  1. Clone o repositório
  2. Instala as dependências:
     
     ```sh
     npm install
     ```

  3. Execute o servidor:
  
     ```sh
     node server.js
     ```
     
## Utilização

### Pessoas

#### Criar uma Pessoa
  - **Endpoint:** `POST /pessoas`
  - **Modelo de requisição:**
 ```json
  {
    "nome": "Vinícius",
    "idade": 22
  }
 ```

#### Listar Pessoas
  - **Endpoint:** `GET /pessoas`

#### Deletar uma Pessoa baseado no ID vinculado a ela
  - **Endpoint:** `DELETE /pessoas/:id`

### Transações

#### Criar uma Transação
- **Endpoint:** `POST /transacoes`
- **Modelo de requisição:**
  ```json
  {
    "descricao": "Salário",
    "valor": 1000,
    "tipo": "receita",
    "pessoaId": 0
  }
  ```
#### Listar Transações
- **Endpoint:** `GET /transacoes`

### Totais
#### Consultar totais por pessoa e geral
- **Endpoint:** `GET /totais`
    
