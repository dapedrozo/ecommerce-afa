import {Router} from 'express'
import * as carritoController from '../../controllers/carrito/carrito.controllers.js'
import {passportAuth} from '../../middlewares/index.js'

const router = Router()

router.post('/', passportAuth.authenticateJwt, carritoController.createCarrito)
router.get('/', passportAuth.authenticateJwt, carritoController.getCarrito)
router.put('/:id', passportAuth.authenticateJwt, carritoController.updateCarrito)
router.delete('/:id', passportAuth.authenticateJwt, carritoController.eliminarElementoCarrito)
router.delete('/', passportAuth.authenticateJwt, carritoController.eliminarCarrito)


export default router