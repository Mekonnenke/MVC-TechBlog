
const {Model,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 const bcrypt = require('bcrypt');


class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    { 
    // define an id column
    id: {
        
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
      // define a username column
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
      // define a password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
     }
}, {
    hooks: {
        //1- set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newUserData) {
            newUserData.password = 
                await bcrypt.hash(newUserData.password, 10);
                return newUserData;
        },
        //2- set up beforeUpdate lifecycle "hook" functionality
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = 
                await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
})


module.exports = User;