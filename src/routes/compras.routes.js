import { Router } from 'express';
import { obtenerCompras } from '../controllers/compra.controller.js';

const router = Router();

// Ruta para obtener todos los compras
router.get('/compra', obtenerCompras);

export default router;