import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt'

// Register a new User 
export const registerUser = async(req,res)=>{
    
    const { firstname,lastname,username,password }=req.body

    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(password,salt)

    const newUser = new UserModel({firstname,lastname,username, password:hashedpass})
    try {    
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}