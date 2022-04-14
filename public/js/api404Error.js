// api404Error.js

const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./baseError')
const Api404Error = require('./api404Error')


const user = await User.getUserById(req.params.id)
if (user === null) {
 throw new Api404Error(`User with id: ${req.params.id} not found.`)
}


class Api404Error extends BaseError {
 constructor (
 name,
 statusCode = httpStatusCodes.NOT_FOUND,
 description = 'Not found.',
 isOperational = true
 ) {
 super(name, statusCode, isOperational, description)
 }
}

module.exports = Api404Error