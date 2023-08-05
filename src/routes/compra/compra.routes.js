import {Router} from 'express'
import * as compraController from '../../controllers/compra/compra.controllers.js'
import {passportAuth} from '../../middlewares/index.js'

const router = Router()

router.get('/', passportAuth.authenticateJwt, compraController.realizarCompra)

export default router