import server from './server'
const port = process.env.PORT || 4000 // en el local funciona con el puerto 4000 pero en production process.env.PORT si tiene 
server.listen(port, () => {
    console.log('Servidor funcionando en puerto:', port)
})