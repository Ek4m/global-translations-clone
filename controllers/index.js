exports.getIndex = (req, res, next) => {
    res.render('index',{
        pageTitle:'Home',
        headerTransparent:true
    })
}

exports.getTranslators = (req, res, next) => {
    res.render('translators', {
        pageTitle:'Our Translators',
        headerTransparent:true
    })
}

exports.getTranslate = (req, res, next) => {
    res.render('translate', {
        pageTitle:'Our Translate',
        headerTransparent:true
    })
}