import User from "../models/user-mod.js"
import bcryptjs from 'bcryptjs'
import { errHandler } from "../utils/error.js"
import jwt from 'jsonwebtoken'

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
export const signin = async (req,res,next) => {
    const {email, passwd} = req.body

    if(!email || !passwd || email === '' || passwd === ''){
        return next(errHandler(400, 'Fill up mandatory fields'))
    }

    try{
        const user = await User.findOne({email})
        if(!user){
            return next(errHandler(404, 'User not found!'))
        }

        const isMatch = bcryptjs.compareSync(passwd, user.passwd)
        if(!isMatch){
            return next(errHandler(401, 'Invalid credentials!'))
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        const {passwd: userPasswd, ...rest} = user._doc

        res.status(200).cookie('token', token, {
            httpOnly: true,}
        ).json(rest)
    }catch(error){
        next(error)
    }
}
