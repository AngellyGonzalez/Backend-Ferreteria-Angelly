import { Router } from 'express';
import { obtenerUsuarios } from '../controllers/usuario.controller.js';

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/clientes', obtenerUsuarios);

export default router;