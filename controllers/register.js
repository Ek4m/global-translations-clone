const UsersSchema = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.getSignIn = (req, res, next) => {
    if(req.user){
        UsersSchema.findOne({_id:req.user._id}).then(user => {
            console.log(user);
            res.render('./register/sign-in',{
                pageTitle:'Login',
                headerTransparent:true,
                user:user
            })
        }).catch(err => {
            res.render('./register/sign-in',{
                pageTitle:'Login',
                headerTransparent:true,
                user:null
            })
        })
    }else{
        res.render('./register/sign-in',{
            pageTitle:'Login',
            headerTransparent:true,
            user:null
        })
    }
}

exports.postSignIn = (req, res, next) => {
    const myData = {
        email:req.body.signinEmail.trim(),
        password:req.body.signinPassword.trim(),
    };
    UsersSchema.findOne({email:myData.email}).then(async user => {
        const isValid = await bcrypt.compare(myData.password, user.password);
        if(isValid){
           const token = jwt.sign({_id:user._id}, 'efwthryjyrgefsdgfndrfsdv');
           res.cookie('qehim', token, {maxAge:500000});
          res.redirect('/');
        }else{
            res.status(400).send('Token is not valid');
        }
    }).catch(err => {
        res.status(400).send('User doesn\'t exist');
    })
}

exports.getSignUp = (req, res, next) => {
    if(req.user){
        UsersSchema.findOne({_id:req.user._id}).then(user => {
            console.log(user);
            res.render('./register/sign-up',{
                pageTitle:'Register now',
                headerTransparent:true,
                user:user
            })
        }).catch(err => {
            res.render('./register/sign-up',{
                pageTitle:'Register now',
                headerTransparent:true,
                user:null
            })
        })
    }else{
        res.render('./register/sign-up',{
            pageTitle:'Register now',
            headerTransparent:true,
            user:null
        })
    }
        
    }



exports.postSignUp = (req, res, next) => {
    const myData = {
        email:req.body.signupEmail.trim(),
        lastName:req.body.signupSurname.trim(),
        firstName:req.body.signupName.trim(),
        password:req.body.signupPassword.trim(),
    };

    // console.log(myData);
    // const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let errorObject = {};
    //     if(!myData.email){
    //         errorObject.email.push('Add your email');
    //     }
    //     if(!regexEmail.test(myData.email)){
    //         errorObject.email.push('Email is not valid')
    //     }
    //     if(!myData.password){
    //         errorObject.password = ['Add your password']
    //     }
    //     if(!myData.firstName){
    //         errorObject.firstName = ['Add your Firstname']
    //     }
    //     if(!myData.lastName){
    //         errorObject.lastName = ['Add your Lastname']
    //     }
    bcrypt.genSalt(10).then(salt => {
        bcrypt.hash(myData.password, salt).then(hashedPass => {
            myData.password = hashedPass;
            const newUser = new UsersSchema(myData);
            newUser.save().then(usr => {
                res.redirect('/register/sign-in');
            }).catch(err => {
                console.log(err);
            })
        })
    })

}

exports.getLogout = (req, res, next) => {
    res.clearCookie('qehim');
    res.redirect('/')
}
