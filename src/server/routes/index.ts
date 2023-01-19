import {Router} from 'express'
import { CitiesController } from '../controllers'

const router = Router()

router.post('/cities', CitiesController.createBodyValidator, CitiesController.create)

export default router
