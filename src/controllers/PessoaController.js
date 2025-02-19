import Pessoa from "../models/Pessoa.js";

//Gerencia classe Pessoa
class PessoaController{

    //Criar uma nova Pessoa
    static create(req, res) {
        try { 
            const { nome, idade } = req.body; //Extrai nome e idade da requisição
            const novaPessoa = Pessoa.create(nome, idade); //Chama o método da classe Pessoa para criação de uma nova pessoa
            return res.status(201).json(novaPessoa); //Retorna a nova Pessoa criada
        } catch (error) {
            //Em caso de erro, retorna o erro ao usuário
            return res.status(500).json({error: "Erro ao criar usuário!", message: error.message});
        }
    }

    //Lista todas as pessoas
    static showAll(req, res){
        try {
            res.json(Pessoa.showAll()); //Chama o método da classe Pessoa para listagem de pessoas e retorna como JSON
        } catch (error) {
            //Em caso de erro, retorna o erro ao usuário
            res.status(500).json({error: "Erro ao listar!"});
        }
    }

    //Deleta uma pessoa pelo id vinculado a ela
    static delete(req, res){
        try {
            const { id } = req.params; //Extrai id da requisição
            Pessoa.delete(parseInt(id)); //Chama o método da classe Pessoa para deletar uma pessoa
            return res.status(204).send(); //Retorna a indicação de que a deleção deu certo
        } catch (error) {
            //Em caso de erro, retorna o erro ao usuário
            res.status(500).json({error: "Erro ao deletar pessoa!"});
        }
    }
}

export default PessoaController;