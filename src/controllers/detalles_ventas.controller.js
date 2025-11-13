import { pool } from '../../db_connection.js';
// Obtener todas las Detalles_Ventas
export const obtenerDetallesVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Detalles_Ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener una detalles_ventas por su ID
export const obtenerDetalle_Venta = async (req, res) => {
    try {
        const id_detalles_ventas = req.params.id_detalles_ventas;
        const [result] = await pool.query('SELECT * FROM detalles_ventas WHERE id_detalles_ventas = ?', [req.params.id_detalles_ventas]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${req.params.id_detalles_ventas} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las detalles_ventas.'
        });
    }
};

// Registrar una nueva detalles_ventas
export const registrardetalles_ventas = async (req, res) => {
    try {
        const {   id_venta,
    id_producto,
    cantidad,
    precio_unitario
 } = req.body;
        const [result] = await pool.query(
            'INSERT INTO detalle_venta ( id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
            [   id_venta,
    id_producto,
    cantidad,
    precio_unitario]
        );
        res.status(201).json({ id_detalle_venta: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la detalle_venta.',
            error: error
        });
    }
};

// Eliminar una detalles_venta por su ID
export const eliminardetalles_ventas = async (req, res) => {
  try {
    const id_detalle_venta = req.params.id_detalle_venta;
    const [result] = await pool.query(
      'DELETE FROM detalles_ventas WHERE id_detalle_venta = ?',
      [id_detalle_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la detalles_ventas. El ID ${id_detalle_venta} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la detalle_venta.',
      error: error
    });
  }
};

// Actualizar una Detalles_Ventas por id 
export const actualizarDetalles_ventasPatch = async (req, res) => {
  try {
    const {id_detalle_venta} = req.params;
    const datos  = req.body;

    const [result] = await pool.query(
      'UPDATE Detalles_Ventas SET ? WHERE id_detalle_venta = ?',
      [datos,  id_detalle_venta ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje:' Detalles_Ventas con . ID ${id_detalle_venta} no encontrado.'
      });
    }

    res.status(200).json({
      mensaje: ' detalle_venta con ID ${id_detalle_venta} actualizada correctamente.'
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar la Detalles_Ventas.',
      error: error
    });
  }
};