import { Router } from 'express';
import { actualizarVentaPatch, eliminarVenta, obtenerVentas, registrarVenta } from '../controllers/ventas.controller.js';

const router = Router();

// Ruta para obtener todos los ventas
router.get('/ventas', obtenerVentas);

// Ruta para obtenes una venta por su ID
router.get('/venta/:id_venta',obtenerVentas);

// Ruta para registrar una nueva ventas
router.post('/registrarventas',registrarVenta);

// Ruta para eliminar una venta por su ID
router.delete('/eliminarventa/:id_venta', eliminarVenta);

// Ruta para actualizar una Venta por su ID
router.patch('/actualizarventapatch/:id_venta', actualizarVentaPatch);

export default router;