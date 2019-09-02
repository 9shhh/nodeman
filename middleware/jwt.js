const jwt = require('jsonwebtoken');
const jwtSecretKey = require('../config/config').jwtSecretKey;

exports.sign = (options, sessionTime) => {
    jwt.sign({
        options
    }, jwtSecretKey, sessionTime, (err, token) => {
        if (err) {
            return console.log(err)
        };
        return token;
    })
};

exports.verify = (token) => {
    jwt.verify(
        token,
        jwtSecretKey, (err, decoded) => {
            if (err) {
                return console.log(err)
            };
            return decoded;
        });
};
