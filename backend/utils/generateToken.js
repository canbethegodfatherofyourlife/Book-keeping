const jwt = require('jsonwebtoken')

const generateToken = (userId) => {
    return jwt.sign({id: userId},'nodejs')
}

module.exports = generateToken;