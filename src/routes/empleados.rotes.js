import { Router } from 'express';
import { eliminarEmpleado, obtenerEmpleados, registrarEmpleado } from '../controllers/empleado.controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/empleado', obtenerEmpleados);

// Ruta para obtenes una empleados por su ID
router.get('/empleado/:id_empleado',obtenerEmpleados);

// Ruta para registrar una nueva empleados
router.post('/registrarempleados',registrarEmpleado);

// Ruta para eliminar un empleado por su ID
router.delete('/eliminarempleado/:id_empleado', eliminarEmpleado);


export default router;