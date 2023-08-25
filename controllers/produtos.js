const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarProdutos(request, response) {
        try {
            const sql = 'SELECT prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_image, prd_destaque, prd_image_destaque, prd_descricao FROM produtos; '; 
            const mesas = await db.query(sql);
            return response.status(200).json(produtos[0]);
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarProdutos(request, response) {
        try{
            // parametros passados via corpo da requisição
            const { prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_image, prd_destaque, prd_image_destaque, prd_descricao} = request.body;
            // instrucao sql para inserção
            const sql = 'INSERT INTO mesas (prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_image, prd_destaque, prd_image_destaque, prd_descricao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
            // definição de array com os parametros que receberam os valores do front-end
            const values = [prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_image, prd_destaque, prd_image_destaque, prd_descricao];
            // executa a instrução de inserção no banco de dados
            const confirmacao = await db.query(sql, values);
            // exibe o id do registro inserido
            const mes_id = confirmacao[0].insertId;
            // mensagem de retorno no formato json
            return response.status(200).json({confirma: 'Cadastro de produto realizado com Sucesso' , message: prd_id});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async editarProduto(request, response) {
        try {
            const { prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao } = request.body;
            const { prd_id} = request.params;
            // instrucao sql para inserção
            const sql = 'UPDATE produtos SET prd_nome = ? prd_valor = ?, prd_unidade = ?, ptp_id = ? , prd_disponivel = ?, prd_image = ?, prd_destaque = ?, prd_image_destaque = ?, prd_descricao = ?) WHERE prd_id >= ;';
            // definição de array com os parametros que receberam os valores do front-end
            const values = [prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao, prd_id];
            // executa a instrução de inserção no banco de dados
            const atualizacao = await db.query(sql, values);
            const nItens = (atualizacao[0].affectedRows == 1? 'Foi atualizado' : 'Foram atualizados' ) + '' + atualizacao[0].affectdRows + ' ite' + (atualizacao[0].affectedRows ==1 ? 'm' : 'ns');
            
            // mensagem de retorno no formato json
        
            return response.status(200).json({confirma: 'Sucesso', message: 'Dados atualizados', "info": nItens });

        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarProdutos(request, response) {
        try {
            const { prd_id} = request.params;
            const sql = 'DELETE FROM produtos WHERE prd_id = ?';
            const values = [prd_id];
            await db.query(sql, values);

            return response.status(200).json({confirma: 'Sucesso', message: 'Produto com id' + prd_id + 'excluido com sucesso'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};