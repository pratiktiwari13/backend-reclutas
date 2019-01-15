const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost/reclutas');
const morgan = require("morgan");


async function connectDB(){
    console.log("In connectdb");
        try {
            await sequelize.authenticate();
            console.log("Connected Successfully");
        }
        catch (err) {
            throw "Connection error :- " + err;
        }
}

connectDB();

module.exports = {
    "getConnectionObject":function(){
        return sequelize;
    }
};
