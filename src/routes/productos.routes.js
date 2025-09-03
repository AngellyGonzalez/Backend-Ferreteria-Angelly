import { Router } from 'express';
import { obtenerProductos } from '../controllers/producto.controller.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/producto', obtenerProductos);

export default router;