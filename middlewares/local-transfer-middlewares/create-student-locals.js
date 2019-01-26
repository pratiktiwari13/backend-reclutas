module.exports = async function(req,res,next){
    req["locals"] = {
        es_data: {
            user_id: req.body.id,
            user_name: (req.body.data.student.student_first_name + " " + req.body.data.student.student_last_name)
        }
    };
    next();
};