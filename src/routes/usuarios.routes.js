import { Router } from 'express';
import { eliminarUsuarios, obtenerUsuarios, registrarUsuario } from '../controllers/usuario.controller.js';

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/clientes', obtenerUsuarios);

// Ruta para obtenes una usuario por su ID
router.get('/usuario/:id_usuario',obtenerUsuarios);

// Ruta para registrar una nueva usuarios
router.post('/registrarusuario',registrarUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/eliminarusuario/:id_usuario', eliminarUsuarios);

export default router;