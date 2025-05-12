import { Router } from 'express';
import { obtenerVentasConDetalles, obtenerVentas, eliminarVenta, registrarVenta, actualizarVenta, obtenerVentaPorId } from '../controllers/ventas.controller.js';

const router = Router();

// Ruta para obtener todos los usuarios.
router.get('/ventas', obtenerVentasConDetalles);
// Ruta para obtener todas las ventas
router.get('/obtenerventas', obtenerVentas);
// Ruta para eliminar una venta
router.delete('/eliminarventa/:id_venta', eliminarVenta);
// Ruta para registrar una nueva venta
router.post('/registrarventa', registrarVenta);
// Ruta para actualizar una venta
router.patch('/actualizarventa/:id_venta', actualizarVenta);
// Ruta para obtener venta por ID
router.patch('/obtenerventaporid/:id_venta', obtenerVentaPorId);
 
export default router;