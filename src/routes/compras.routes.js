import { Router } from 'express';
import { eliminarCompra, obtenerCompras, registrarCompra } from '../controllers/compra.controller.js';

const router = Router();

// Ruta para obtener todos los compras
router.get('/compra', obtenerCompras);

// Ruta para obtenes una compra por su ID
router.get('/compra/:id_compra',obtenerCompras);

// Ruta para registrar una nueva compra
router.post('/registrarcompra',registrarCompra);

// Ruta para eliminar un compra por su ID
router.delete('/eliminarcompra/:id_compra', eliminarCompra);

export default router;