import User from "../models/user-mod.js"
import bcryptjs from 'bcryptjs'
import { errHandler } from "../utils/error.js"

export const signup = async (req,res,next) => {
    const {username, email, passwd} = req.body

    if(!username || !email || !passwd || username === '' || email === '' || passwd === ''){
       return next(errHandler(400, 'Fill up mandatory fields!'))
    }
    const encryptedPasswd = bcryptjs.hashSync(passwd,16)
    const newUser = new User({
        username,
        email,
        passwd: encryptedPasswd,
    })

    try{

        await newUser.save()
        res.json({message: "Success!"})
    }catch(error){
        next(error)
    }

    
}