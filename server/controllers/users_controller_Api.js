const User = require('../model/users_schema');
const bcrypt = require('bcrypt');   

module.exports.userApi = function(req,res){
    return res.json(200, {
        message : "Users Api"
    })
}

//user signup
module.exports.signUp = async function(req,res){

    try {
        //password
        const salt = await bcrypt.genSalt(7);
        const hashedPassword = await bcrypt.hash(req.body.password , salt);

        //new user
        const newUser = new User({
            userName : req.body.userName,
            email : req.body.email,
            name : req.body.name,
            password : hashedPassword,
        })

        // save user    
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        if(error){
            console.log(error);
        }
    }
   
}

//user login
module.exports.logIn = async function(req,res){
    try {
        const user = await User.findOne({email : req.body.email});

        if(!user){
            res.status(404).send("User not found")
        }

        if(req.body.password != user.password){
            res.status(400).json("Password not valid")
        }

        res.status(200).json(user)  

    } catch (error) {
        console.log(error)
    }
}

//update user
module.exports.updateUser = async function(req , res){

    if(req.body.userId == req.params.id){
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(7);
                req.body.password = await bcrypt.hash(req.body.password , salt);
            } catch (error) {
                return  res.status(500).json(error);
            }
        }
        try {
        
            const user = await User.findByIdAndUpdate(req.body.userId , {$set: req.body});
            res.status(200).json("Account Updated")
        } catch (error) {
            return  res.status(500).json(error);
        }
    }

    else{
        return res.status(403).json("You can't update this account")
    }
}

