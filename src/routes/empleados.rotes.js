import { Router } from 'express';
import { actualizarEmpleadoPatch, eliminarEmpleado, obtenerEmpleados,obtenerEmpleado, registrarEmpleado } from '../controllers/empleado.controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/empleado', obtenerEmpleados);

// Ruta para obtener  empleados por su ID
router.get('/empleado/:id_empleado',obtenerEmpleado);

// Ruta para registrar un nuevo empleados
router.post('/registrarempleados',registrarEmpleado);

// Ruta para eliminar un empleado por su ID
router.delete('/eliminarempleado/:id_empleado', eliminarEmpleado);

// Ruta para actualizar una Empleado por su ID
router.patch('/actualizarempleadopatch/:id_empleado', actualizarEmpleadoPatch);


export default router;