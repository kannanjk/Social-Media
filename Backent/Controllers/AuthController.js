import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt'

// Register a new User 
export const registerUser = async (req, res) => {


    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(req.body.password, salt)
    req.body.password = 
    req.body.password = hashedpass
    const newUser = new UserModel( req.body )
    const {username} = req.body
    try {
        const oldUser = await UserModel.findOne({username})
        if (oldUser) {
            return res.status(400).json({maessage:"Username is already registerd"})
        }
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
     
// login user
export const loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await UserModel.findOne({ username: username })

        if (user) {

            console.log(user);
           
            const validity = await bcrypt.compare(password, user.password)
           
            console.log(password);
            validity? res.status(200).json(user): res.status(404).json("Wrong Password")
        } else {
            res.status(404).json("user dose not exist")
        }
    } catch (error) {
       res.status(500).json({message:error.message})
    }
}