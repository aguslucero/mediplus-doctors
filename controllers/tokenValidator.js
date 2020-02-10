const express = require('express');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secretkey12345'

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided' });
    }
    // Decode the Tokenreq.userId = decoded.id;
    const decoded =  jwt.verify(token, SECRET_KEY);
    req.userId = decoded._id;
    next();
}

module.exports = verifyToken