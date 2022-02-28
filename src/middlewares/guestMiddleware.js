function guestMiddleware(req,res,next){
    if(req.session.user){
        return res.render('/users/profile')       
    }  
        next();
}


// esto lo podriamos poner en una pagina mas para verificar si el que
// entra esta logueado o no

module.exports= guestMiddleware;