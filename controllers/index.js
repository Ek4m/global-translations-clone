const UserSchema = require("../models/User")

exports.getIndex = (req, res, next) => {
    if(req.user){
        UserSchema.findOne({_id:req.user._id}).then(user => {
            console.log(user);
            res.render('index',{
                pageTitle:'Home',
                headerTransparent:true,
                user:user
            })
        }).catch(err => {
            res.render('index',{
                pageTitle:'Home',
                headerTransparent:true,
                user:{}
            })
        })
    }else{
        res.render('index',{
            pageTitle:'Home',
            headerTransparent:true,
            user:{}
        })
    }
 
}

exports.getTranslators = (req, res, next) => {
    if(req.user){
        UserSchema.findOne({_id:req.user._id}).then(user => {
            console.log(user);
            res.render('translators', {
                pageTitle:'Our Translators',
                headerTransparent:true,
                user:user
            })
        }).catch(err => {
            res.render('translators', {
                pageTitle:'Our Translators',
                headerTransparent:true,
                user:null
            })
        })
    }else{
        res.render('translators', {
            pageTitle:'Our Translators',
            headerTransparent:true,
            user:null
        })
    }
}

exports.getTranslate = (req, res, next) => {
    if(req.user){
        UserSchema.findOne({_id:req.user._id}).then(user => {
            console.log(user);
            res.render('translate', {
                pageTitle:'Our Translate',
                headerTransparent:true,
                user:user
            })
        }).catch(err => {
            res.render('translate', {
                pageTitle:'Our Translate',
                headerTransparent:true,
                user:null
            })
        })
    }else{
        res.render('translate', {
            pageTitle:'Our Translate',
            headerTransparent:true,
            user:null
        })
    }  
}

exports.getProfile = (req, res, next) => {
    if(req.user){
        UserSchema.findOne({_id:req.user._id}).then(user => {
            console.log(user);
            res.render('profile', {
                pageTitle:user.firstName,
                headerTransparent:false,
                user:user
            })
        }).catch(err => {
            res.redirect('/')

        })
    }else{
      res.redirect('/')
    }  
}