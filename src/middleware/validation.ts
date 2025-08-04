import type { Request,Response, NextFunction} from 'express'
import {validationResult} from 'express-validator'

export const handleInputErrors =(req : Request,res : Response, next: NextFunction) => {
    //manejo de errores
    let errors = validationResult(req)
    console.log('Desde validation.ts')
    if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array()})
    }
    next() // Si no hay errores, continuar con la siguiente función de middleware
}