import colors from 'colors'
import server from './server'
const port = process.env.PORT || 4000 // en el local funciona con el puerto 4000 pero en production process.env.PORT si tiene 
server.listen(port, () => {
    console.log(colors.bgGreen.italic('Servidor funcionando en puerto:'), port)
})

/* interface Product{
    id:number
    name:string
    price:number
} 
interface Product{
    image:string
}

let product : Product ={
    id:1,
    name:"Table",
    price : 30,
    image : "imagen.jpg"
}*/