const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarMesas(request, response) {
        try {
            return response.status(200).json({confirma: 'Mesas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async createMesas(request, response) {
        try{
            // parametros passados via corpo da requisição
            const { mes_nome, mes_status, mes_lugares, ped_id} = request.body;
            // instrucao sql para inserção
            const sql = 'INSERT INTO mesas (mes_nome, mes_status, mes_lugares, ped_id) VALUES (?, ?, ?, ?)';
            // definição de array com os parametros que receberam os valores do front-end
            const values = [mes_nome, mes_status, mes_lugares, ped_id];
            // executa a instrução de inserção no banco de dados
            const confirmacao = await db.querry( sql, values);
            // exibe o id do registro inserido
            const mes_id = confirmacao[0].insertId;
            // mensagem de retorno no formato json
            return response.status(200).json({confirma: 'Sucesso' , message: mes_id});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
};