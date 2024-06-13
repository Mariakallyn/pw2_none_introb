const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const User = require('../models/User')

const Ideia = db.define('Ideia', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

Ideia.belongsTo(User)
User.hasMany(Ideia)

module.exports = Ideia