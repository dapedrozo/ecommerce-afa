import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import productRoutes from './routes/products/products.routes.js'
import userRoutes from './routes/users/users.routes.js'
import authRoutes from './routes/auth/auth.routes.js'
import carritoRoutes from './routes/carrito/carrito.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/carrito',carritoRoutes)

export default app