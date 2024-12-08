"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jwt_1 = require("../utils/jwt");
const auth = (req, res, next) => {
    try {
        const accessTokenId = req.headers.authorization;
        if (!accessTokenId) {
            res.status(400).json({
                msg: 'No access token'
            });
            return;
        }
        // bug or no bug in return idk
        const userId = (0, jwt_1.verifyJwt)(accessTokenId);
        req.userId = userId;
        next();
    }
    catch (error) {
        res.status(500).json({
            msg: 'no accessToken'
        });
    }
};
exports.auth = auth;
