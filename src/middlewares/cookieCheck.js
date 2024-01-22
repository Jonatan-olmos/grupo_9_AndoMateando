module.exports = (req,res,next) => {
    if(req.cookies.Ando-Mateando){
        req.session.userLogin = req.cookies.Ando-Mateando_user
    }

    next()
}