import Transacao from "../models/Transacao.js";

//Gerencia classe Transacao
class TransacaoController{
    
    //Cria uma nova Transacao
    static create(req, res) {
        try {
            const { descricao, valor, tipo, pessoaID } = req.body; //Extrai descricao, valor, tipo, pessoaID da requisição
            const novaTransacao = Transacao.create(descricao, valor, tipo, parseInt(pessoaID)); //Chama o método da classe Transacao para criação de uma nova transacao
            return res.status(201).json(novaTransacao); //Retorna a nova Transacao criada
        } catch (error) {
            //Em caso de erro, retorna o erro ao usuário
            return res.status(400).json({error: "Erro ao criar transação!", message: error.message});
        }
    }
    
    //Lista todas as transacoes
    static showAll(req, res){
        try {
            res.json(Transacao.showAll()); //Chama o método da classe Pessoa para listagem de transacoes e retorna como JSON
        } catch (error) {
            //Em caso de erro, retorna o erro ao usuário
            res.status(500).json({error: "Erro ao listar!"});
        }
    }
}

export default TransacaoController;