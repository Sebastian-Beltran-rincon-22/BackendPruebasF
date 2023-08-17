const { config } = require('dotenv')
const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const SECRET = process.env.SECRET

const userControllers ={   
    signup: async (req,res) =>{
        try{
        const {userName, email, password, admin} = req.body

        const userRegis = new User({
            userName,
            email,
            password: User.encryptPassword(password)
        })

        if(admin){
            const foundAdmin = await Admin.find({name: {$in: admin} })
            console.log(foundAdmin)
            userRegis.admin = foundAdmin.map((admins) => admins._id)
        } else{
            const admins = await Admin.findOne({name: 'user'}) 
            console.log(admins._id)
            userRegis.admin = [admins._id]
        }
        const savedUser= await userRegis.save()
        res.status(200).json('signup')
        console.log(userRegis)

        const token = jwt.sign({id: savedUser._id}, SECRET,{
            expiresIn: 86400 //cada dia 
        })
        res.status(200).json({token})
    }catch(error){
        return res.status(500).json(error.message)
    }
    },  

    signin: async (req,res) =>{
        try{
        const userFound =await User.findOne({email: req.body}).populate("admin")

        if (!userFound) return res.estatus(400).json({message: 'user not found '})

        const mathPassword = await User.comparePassword(req.body.password, userFound.password)

        if (!mathPassword) return res.estatus(401).json({token: null, message: 'invalid password '})
        
        const token = jwt.sign({id: userFound._id}, SECRET,{
            expiresIn: 86400
        })

        res.json({token})
    }catch(error){
        console.log(error)
    }
}
}

module.exports = userControllers