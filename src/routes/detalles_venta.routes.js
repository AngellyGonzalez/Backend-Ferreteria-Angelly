import { Router } from 'express';
import { obtenerDetallesVentas } from '../controllers/detalles_ventas.controller.js';

const router = Router();

// Ruta para obtener todos los detalles_ventas
router.get('/detalles_ventas', obtenerDetallesVentas);

export default router;