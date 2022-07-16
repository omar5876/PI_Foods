const { DataTypes }  = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('kindOfDiet', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}