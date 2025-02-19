import memoBD from "./MemoBD.js";

//Classe que representa uma Pessoa
class Pessoa{

    //Contrutor da classe Pessoa
    constructor(nome, idade){
        this.id = memoBD.pessoaID++; //ID unico, sempre incrementado ao criar uma nova Pessoa
        this.nome = nome; //Nome da pessoa
        this.idade = idade; //Idade da pessoa
    }

    //Cria uma nova pessoa e adiciona no banco de dados
    static create(nome, idade){
        const novaPessoa = new Pessoa(nome, idade); //Cria uma nova instancia do objeto Pessoa
        memoBD.pessoas.push(novaPessoa); //Adiciona o objeto Pessoa ao banco de dados
        return novaPessoa; //Retorna o objeto Pessoa
    }

    //Retorna todas as pessoas cadastradas no banco de dados
    static showAll(){
        return memoBD.pessoas;
    }

    //Deleta uma pessoa e suas transacoes baseado no id
    static delete(id){
        memoBD.pessoas = memoBD.pessoas.filter(pessoa => pessoa.id !== id); //Cria uma nova lista de pessoas baseado na filtragem de pessoas com o id diferente do id da pessoa que está sendo deletada
        memoBD.transacoes = memoBD.transacoes.filter(transacao => transacao.pessoaID !== id); //Cria uma nova lista transacoes baseado na filtragem de id vinculado a transacoes diferente do id da pessoa que está sendo deletada
    }
}

export default Pessoa;