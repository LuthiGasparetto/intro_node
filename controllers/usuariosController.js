const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarUsuarios(request, response) {
        try {
            const sql = 'SELECT usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo FROM usuarios;';
            const usuarios = await db.query(sql);

            return response.status(200).json(usuarios[0]);
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
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
async editarUsuarios(request, response) {
    try {
        const { usu_id,usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo } = request.body;
        const { usu_id} = request.params;
        // instrucao sql para inserção
        const sql = 'UPDATE produtos SET usu_id = ?,usu_nome = ?, usu_email = ?, usu_senha =?, usu_tipo = ?, usu_ativo = ? WHERE usu_id >= ;';
        // definição de array com os parametros que receberam os valores do front-end
        const values = [usu_id,usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo];
        // executa a instrução de inserção no banco de dados
        const atualizacao = await db.query(sql, values);
        const nItens = (atualizacao[0].affectedRows == 1? 'Foi atualizado' : 'Foram atualizados' ) + '' + atualizacao[0].affectdRows + ' ite' + (atualizacao[0].affectedRows ==1 ? 'm' : 'ns');
        
        // mensagem de retorno no formato json
    
        return response.status(200).json({confirma: 'Sucesso', message: 'Dados atualizados', "info": nItens });

    } catch (error) {
        return response.status(500).json({confirma: 'Erro', message: error});
    }
},
async apagarUsuarios(request, response) {
    try {
        const { usu_id} = request.params;
        const sql = 'DELETE FROM usuarios WHERE usu_id = ?';
        const values = [usu_id];
        await db.query(sql, values);

        return response.status(200).json({confirma: 'Sucesso', message: 'Produto com id' + prd_id + 'excluido com sucesso'});
    } catch (error) {
        return response.status(500).json({confirma: 'Erro', message: error});
    }
},
};