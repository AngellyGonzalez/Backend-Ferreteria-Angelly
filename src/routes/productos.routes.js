import { Router } from 'express';
import { eliminarProducto, obtenerProductos, registrarProducto } from '../controllers/producto.controller.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/producto', obtenerProductos);

// Ruta para obtenes una productos por su ID
router.get('/producto/:id_producto',obtenerProductos);

// Ruta para registrar una nueva Producto
router.post('/registrarproducto',registrarProducto);

// Ruta para eliminar un productos por su ID
router.delete('/eliminarproducto/:id_producto', eliminarProducto);



export default router;