function guestMiddleware(req,res,next){
    if( req.session.userToLogin == undefined){
        next();
    } else {
        res.send('Pagina para invitados')
    }
}

// esto lo podriamos poner en una pagina mas para verificar si el que
// entra esta logueado o no

module.exports= guestMiddleware;