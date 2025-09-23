import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria, eliminarCategoria } from '../controllers/categorias.controller.js';

const router = Router();

// Ruta para obtener todos los categoria
router.get('/categorias', obtenerCategorias);

// Ruta para obtenes una categoria por su ID
router.get('/categoria/:id_categoria',obtenerCategoria);

// Ruta para registrar una nueva categoria
router.post('/registrarcategoria',registrarCategoria);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);

export default router;