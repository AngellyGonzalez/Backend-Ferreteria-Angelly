import { Router } from 'express';
import { obtenerDetallesCompras } from '../controllers/Detalles_compras.controller.js';

const router = Router();

// Ruta para obtener todos los detalles_compras
router.get('/Detalles_compras', obtenerDetallesCompras);

export default router;