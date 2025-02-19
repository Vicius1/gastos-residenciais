import memoBD from "../models/MemoBD.js";

//Gerencia e faz os calculos para exibição dos totais
class TotalController{

    //Calcula e exibe totais
    static showTotais(req, res){
        try {

            //Para cada pessoa, faz o cálculo dos totais
            const totaisPessoas = memoBD.pessoas.map(pessoa => {

                //Filtra as transacoes da pessoa atual
                const transacoesPessoa = memoBD.transacoes.filter(transacao => transacao.pessoaID === pessoa.id);
                
                //Calcula totais de receitas
                const totalReceitas = transacoesPessoa
                    .filter(transacao => transacao.tipo === "receita")
                    .reduce((acc,transacao) => acc + transacao.valor, 0);
                
                //Calcula totais de despesas
                const totalDespesas = transacoesPessoa
                    .filter(transacao => transacao.tipo === "despesa")
                    .reduce((acc,transacao) => acc + transacao.valor, 0);
                
                //Retorna informações sobre a pessoa atual
                return {
                    idPessoa: pessoa.id,
                    pessoa: pessoa.nome,
                    totalReceitas,
                    totalDespesas,
                    saldo: totalReceitas - totalDespesas
                };
            });
            
            //Calcula totais gerais
            const totalReceitasGeral = totaisPessoas.reduce((acc, pessoa) => acc + pessoa.totalReceitas, 0);
            const totalDespesasGeral = totaisPessoas.reduce((acc, pessoa) => acc + pessoa.totalDespesas, 0);
            const saldoTotal = totalReceitasGeral - totalDespesasGeral;

            //Retorna totais por pessoa e gerais em JSON
            res.json({
                totaisPessoas,
                total: {
                    totalReceitas: totalReceitasGeral,
                    totalDespesas: totalDespesasGeral,
                    saldo: saldoTotal
                }
            });
        } catch (error) {
            //Em caso de erro, retorna o erro ao usuário
            return res.status(500).json({error: "Erro ao calcular totais!", message: error.message});
        }
    }
}

export default TotalController;