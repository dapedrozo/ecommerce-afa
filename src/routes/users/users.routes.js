import {Router} from 'express'
import * as usersController from '../../controllers/users/users.controllers.js'
import {passportAuth} from '../../middlewares/index.js'

const router = Router()

router.get('/perfil/:email', passportAuth.authenticateJwt, usersController.getPerfil)
router.put('/perfil/:email', passportAuth.authenticateJwt, usersController.updatePerfil)

export default router