import express from 'express' // ESM Ecmascript modules, es la forma de importar 
import router from './rourter'

const app = express()
// Leer formulario
app.use(express.json())
app.use('/',router) // la funcion use detecta todas la url del rourt

export default app // permite importar