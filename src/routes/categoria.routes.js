import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria, eliminarCategoria, actualizarCategoriaPatch } from '../controllers/categorias.controller.js';

const router = Router();

// Ruta para obtener todos los categoria
router.get('/categorias', obtenerCategorias);

// Ruta para obtenes una categoria por su ID
router.get('/categoria/:id_categoria',obtenerCategoria);

// Ruta para registrar una nueva categoria
router.post('/registrarcategoria',registrarCategoria);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);

// Ruta para actualizar una Categoria  por su ID
router.patch('/actualizarcategoriapatch/:id_categoria', actualizarCategoriaPatch);

export default router;