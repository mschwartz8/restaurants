const Sequelize = require('sequelize');
const dbConnection = new Sequelize("postgres://localhost:5432/New-Restaurants");


// const test = async () => {
//     try {
//         await dbConnection.authenticate()
//         console.log('authenticated')
//     } catch (e){
//         console.log(e)
//     }
// }

const Restaurant = dbConnection.define("restaurants", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    cuisine: {
        type: Sequelize.DataTypes.ENUM('mexican', 'american', 'thai', 'chinese', 'indian', 'japanese', 'spanish', 'french', 'fusion', 'african', 'carribean')
    },
    googleLink: {
        type: Sequelize.STRING
    },
    cost: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }

})

module.exports = {
    dbConnection: dbConnection,
    Restaurant: Restaurant
}  