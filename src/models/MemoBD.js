//Banco de Dados em memória
class MemoBD{
    constructor(){
        this.pessoas = [];
        this.transacoes = [];
        this.pessoaID = 0;
        this.transacaoID = 0;
    }
}

export default new MemoBD();