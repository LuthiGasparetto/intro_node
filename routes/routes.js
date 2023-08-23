//const db = requeire("../database/connection");
const express = require('express');
const router = express.Router();

// importação dos controles utilizados nas rotas
const CidadesController = require('../controllers/cidadesController');
const ClientesController = require('../controllers/clientesController');
const EnderecoClienteController = require('../controllers/enderecoClienteController');
const MesasController = require('../controllers/mesasController');
const PedidoProdutoController = require('../controllers/pedidoProdutoController');
const PedidosController = require('../controllers/pedidosController');
const ProdutosController = require('../controllers/produtosController');
const ProdutosTipoController = require('../controllers/produtoTipoController');
const UsuariosController = require('../controllers/usuariosController');

// definição de rotas
router.get('/cidades', CidadesController.listarCidades);
// cadastrar
// editar
// excluir

router.get('/clientes', ClientesController.listarClientes);
// cadastrar
// editar
// excluir

router.get('/enderecoClientes', EnderecoClienteController.listarEnderecoCliente);
// cadastrar
// editar
// excluir

router.get('/mesas', MesasController.listarMesas);
router.post('/mesas', MesasController.createMesas);
// editar
// excluir

router.get('/pedidoProduto', PedidoProdutoController.listarPedidoProduto);
// cadastrar
// editar
// excluir

router.get('/pedidos', PedidosController.listarPedidos);
// cadastrar
// editar
// excluir

router.get('/produtos', ProdutosController.listarProdutos);
// cadastrar
// editar
// excluir

router.get('/produtoTipo', ProdutosTipoController.listarProdutoTipo);
// cadastrar
// editar
// excluir

router.get('/usuarios', UsuariosController.listarUsuarios);
// cadastrar
// editar
// excluir

module.exports = router;