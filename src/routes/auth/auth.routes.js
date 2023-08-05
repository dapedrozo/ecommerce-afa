import {Router} from 'express'
import * as authController from '../../controllers/auth/auth.controllers.js'
import {passportAuth} from '../../middlewares/index.js'

const router = Router()

router.post('/login', passportAuth.ensureAuthenticated, authController.signIn)
router.post('/register', passportAuth.ensureAuthenticated, authController.signUp)
router.get('/logout', passportAuth.authenticateJwt, authController.logout)

export default router