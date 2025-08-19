import express from 'express' // ESM Ecmascript modules, es la forma de importar 
import cors from 'cors'
import 'dotenv/config'
import router from './rourter'
import { connectDB } from './config/db' // importamos la conexion de mongo al server
import { corsConfig } from './config/cors' //importamos el cors para permitir la conexion

connectDB()
const app = express()

// cors 
app.use(cors(corsConfig))
// Leer formulario
app.use(express.json())
app.use('/',router) // la funcion use detecta todas la url del rourt

export default app // permite importar