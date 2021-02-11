'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')


function createTokenCliente(user)
{

    const payload ={
        sub: user._id,
        iat: moment().unix(),
        exp:moment().add(14,'days').unix(),
        type: 'cliente', 
    }
   
   return jwt.encode(payload,process.env.SECRET_TOKEN)
}
function createTokenEmpresa(user)
{

    const payload ={
        sub: user._id,
        iat: moment().unix(),
        exp:moment().add(14,'days').unix(),
        type: 'empresa', 
    }
   
   return jwt.encode(payload,process.env.SECRET_TOKEN)
}


module.exports = {
    createTokenCliente,
    createTokenEmpresa
    
};