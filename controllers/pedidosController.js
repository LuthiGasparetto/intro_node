const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarPedidos(request, response) {
        try {
            return response.status(200).json({confirma: 'Mesas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarPedidos(request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrarPedidos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarPedidos(request, response) {
        try {
            return response.status(200).json({confirma: 'editarPedidos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarPedidos(request, response) {
        try {
            return response.status(200).json({confirma: 'apagarPedidos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};