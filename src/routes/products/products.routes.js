import {Router} from 'express'
import * as productsController from '../../controllers/products/products.controllers.js'
import {passportAuth} from '../../middlewares/index.js'

const router = Router()

router.post('/', passportAuth.authenticateJwt, productsController.getProducts)
router.get('/:name', passportAuth.authenticateJwt, productsController.getProduct)

export default router