exports.getSignIn = (req, res, next) => {
    res.render('./register/sign-in',{
        pageTitle:'Login',
        headerTransparent:true
    })
}

exports.postSignIn = (req, res, next) => {
    const body = req.body;
    console.log(body);
    res.redirect('/');
}

exports.getSignUp = (req, res, next) => {
    res.render('./register/sign-up',{
        pageTitle:'Register now',
        headerTransparent:true
    })
}


exports.postSignUp = (req, res, next) => {
    const body = req.body;
    console.log(body);
    res.redirect('/');
}
