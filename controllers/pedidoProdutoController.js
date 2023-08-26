const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarPedidoProduto(request, response) {
        try {
            return response.status(200).json({confirma: 'Mesas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async create(request, response) {
        try{
            // parametros passados via corpo da requisição
            const { ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status} = request.body;
            // instrucao sql para inserção
            const sql = 'INSERT INTO mesas (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (?, ?, ?, ?, ?, ?, ?)';
            // definição de array com os parametros que receberam os valores do front-end
            const values = [ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status];
            // executa a instrução de inserção no banco de dados
            const confirmacao = await db.querry( sql, values);
            // exibe o id do registro inserido
            const mes_id = confirmacao[0].insertId;
            // mensagem de retorno no formato json
            return response.status(200).json({confirma: 'Sucesso' , message: ped_id});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
};