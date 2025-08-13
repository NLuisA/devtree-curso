
import { Request, Response } from "express"
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from "../models/User"
import { checkPassword, hashPassword } from "../utils/auth"

export const createAccount = async (req: Request, res: Response) =>{
    //console.log(req.body)
    const { email, password} = req.body
    const userExists = await User.findOne({email})
    if(userExists){
     const error = new Error('Un usuario ya existe con este email')
    return res.status(409).json({error: error.message})
    }

    const handle = slug(req.body.handle,'')
    const handleExists = await User.findOne({handle})
    if(handleExists){
     const error = new Error('El nombre de usuario no esta disponible')
    return res.status(409).json({error: error.message})
    }
    
    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle 
    await user.save()
    res.status(201).json({message: 'Registro Creado Correctamente'}) // res es para la resouesta y la funcion send para finalizar la ejecucion
}

export const login = async (req:Request,res:Response) => {
//manejo de errores
    let errors = validationResult(req)
    if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array()})
    }
     //Revisar si el usuario existe
    const { email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
     const error = new Error('No existe un usuario con este email')
    return res.status(404).json({error: error.message})
    }
    //comprobar el password
    const  isPasswordCorrect = await checkPassword(password, user.password)
    if(!isPasswordCorrect){
     const error = new Error('La contraseña es incorrecta')
    return res.status(401).json({error: error.message})
    }
    res.send('Auntenticado correctamente')
} 