const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class UserController{
    static login(req, res){
        res.render('auth/login')
    }
    static async loginPost(req, res){
        const { email, password} = req.body

        const user = await User.findOne({where: {email:{email: email}}})

        if (!user){
            res.render('auth/login',{
                message: 'Usuario nao encontrado.'
            })

            return
        }

        req.session.useid =user.id 
        req.flash('message', 'Login realizado com sucesso!')

        req.session.save(() => {
            res.redirect('/')
        })
    }

    static register(req, res){

    }
    static async loginPost(req, res){

    }
     static register(req, res){

    }
     static logout(req, res){

    }
    
    

}