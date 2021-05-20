const bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        uid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        emailVerified: Sequelize.BOOLEAN,
        photoUrl: Sequelize.STRING
    }, {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                //return bcrypt.hash(password, bcrypt.genSaltSync(8));
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
                //return bcrypt.compare(password, this.password);
            }
        },
        indexes : [
            {
                unique : true,
                fields : ['username','email','password']
            }
        ]
    });

    return Users;
  };