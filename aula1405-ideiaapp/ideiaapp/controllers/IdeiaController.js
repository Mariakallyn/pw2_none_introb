const Ideia = require('../models/Ideia')
const User = require('../models/User')

const {op} = require('sequelize')

module.exports = class IdeiaController {
    static async dashboard(req, res) {
        const userId = req.session.userid

        const user = await User.findOne({
            where:{
                id: userId
            },
            include: Ideia,
            plain: true,
        })

        const ideias = user.Ideia.map((result) => result.dataValues)

        let emptyIdeias = true

        if(ideias.length >0){
            emptyIdeias = false
        }

        console.log(ideias)
        console.log(emptyIdeias)

        res.render('ideias/dashboard', {ideias, emptyIdeias})
    }

    static createIdeia(req, res){
        res.render('ideias/create')
    }

    static createIdeiaSave(req, res){
        const ideia = {
            title: req.body.title,
            UserId: req.session.userid
        }

        Ideia.create(ideia)
        .then(() => {
            req.flash('message', 'Pensamento criado com sucesso')
            req.session.save(() =>{
                res.render('/ideias/dashboard')
            })
        })
        .catch((error) => console.log(error))
    }

    static showIdeias(req, res){
        console.log(req.query)

        let search =''

        if(req.query.seach){
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order == 'old'){
            order = 'ASC'
        }else{
            order = 'DESC'
        }
    }
}