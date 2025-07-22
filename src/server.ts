import express from 'express' // ESM Ecmascript modules, es la forma de importar 
import 'dotenv/config'
import router from './rourter'
import { connectDB } from './config/db' // importamos la conexion de mongo al server

const app = express()
connectDB()
// Leer formulario
app.use(express.json())
app.use('/',router) // la funcion use detecta todas la url del rourt

export default app // permite importar