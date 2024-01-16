const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const requireAuth = async (req, resp, next)=>{

    //verify authentication
    const { authorization } = req.headers

    if (!authorization){
        return resp.status(401).json({error:'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try{
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.userid = await User.findOne({_id}).select('_id')
        next()

    } catch (error) {
        console.log(error)
        resp.status(401).json({error:'Request is not authorized'})
    }

}
module.exports = requireAuth