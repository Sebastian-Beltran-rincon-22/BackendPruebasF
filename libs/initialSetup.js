const Admin = require('../models/admin')
const User = require('../models/user')
const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const ADMIN_USERNAME = process.env.ADMIN_USERNAME
const ADMIN_PASSWORDL = process.env.ADMIN_PASSWORD

const rolAdmin ={
    createAdmin : async () =>{
    try{    
        const count = await Admin.collection.estimatedDocumentCount()

        if (count > 0 ) return

        const values = await Promise.all([
            new Admin({name: 'user'}).save(),
            new Admin({name: 'admin'}).save()
        ])
    
    console.log(values)
    }catch ( error){
        console.error(error)
    }
},

    adminprint : async () =>{

        const userFound = await  User.findOne({email: ADMIN_EMAIL})
        console.log(userFound)
        if (userFound) return

        const admin = await Admin.find({name: {$in:["admin"]}})

        const userRegis = await User.create({
            userName: ADMIN_USERNAME,
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORDL,
            admin: admin.map((admins) =>admins._id)
        })

        console.log(`new user created: ${userRegis.email}`)
    }
}

module.exports = rolAdmin.createAdmin


//try{    
//    const count = await Admin.estimatedDocumentCount();  

//    if (count > 0 ) return