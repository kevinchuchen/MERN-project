const User = require('../models/userModel')


//login user
const loginUser = async (req, resp) => {

    resp.json({msg:'login user'})
}

//signup user
const signupUser = async (req, resp) => {
    const {email, password} = req.body
    try{
        const user = await User.signup(email,password)

        resp.status(200).json({email,user})
    } catch(error){
        resp.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}