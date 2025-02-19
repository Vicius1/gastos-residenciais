import memoBD from "./MemoBD.js";

//Classe que representa uma Transacao
class Transacao{

    //Contrutor da classe Pessoa
    constructor(descricao, valor, tipo, pessoaID){
        this.id = memoBD.transacaoID++; //ID unico, sempre incrementado ao criar uma nova Transacao
        this.descricao = descricao; //Descricao da Transacao
        this.valor = valor; //Valor da Transacao
        this.tipo = tipo; //Tipo da Transacao
        this.pessoaID = pessoaID; //ID da pessoa que fez Transacao
    }

    //Cria uma nova transacao e adiciona no banco de dados
    static create(descricao, valor, tipo, pessoaID){
        const pessoa = memoBD.pessoas.find(pessoa => pessoa.id === pessoaID); //Busca no banco de dados a pessoa que está fazendo a transacao

        //Verifica a idade e o tipo da transacao e retorna se algo estiver errado
        if(pessoa.idade < 18 && tipo === "receita"){
            throw new Error ("Você só pode ter despesas!");
        }

        const novaTransacao = new Transacao(descricao, valor, tipo, pessoaID); //Cria uma nova instancia do objeto Transacao
        memoBD.transacoes.push(novaTransacao); //Adiciona o objeto Transacao ao banco de dados
        return novaTransacao; //Retorna o objeto Transacao
    }

    //Retorna todas as transacoes cadastradas no banco de dados
    static showAll(){
        return memoBD.transacoes;
    }

}

export default Transacao;