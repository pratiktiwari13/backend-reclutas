const studentLocalsMiddleware = require("./create-student-locals");

module.exports = function (req,res,next) {
    switch (role){
        case "STUDENT":
                studentLocalsMiddleware(req,res,next);
            break;
    }
};