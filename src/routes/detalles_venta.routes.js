import { Router } from 'express';
import { eliminardetalles_ventas, obtenerDetallesVentas, registrardetalles_ventas } from '../controllers/detalles_ventas.controller.js';

const router = Router();

// Ruta para obtener todos los detalles_ventas
router.get('/detalles_ventas', obtenerDetallesVentas);

// Ruta para obtenes un detralles_ventas por su ID
router.get('/detalles_ventas/:id_detalle_ventas',obtenerDetallesVentas);

// Ruta para registrar una nueva detalle_venta
router.post('/registrardetalle_venta',registrardetalles_ventas);

// Ruta para registrar una nueva detalle_venta
router.post('/registrardetalle_venta',registrardetalles_ventas);

// Ruta para eliminar un detalle_venta por su ID
router.delete('/eliminardetalles_ventas/:id_detalle_venta', eliminardetalles_ventas);


export default router;