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
        const id = (0, jwt_1.verifyJwt)(accessTokenId);
        // @ts-ignore
        req.userId = id;
        next();
    }
    catch (error) {
        res.status(500).json({
            msg: 'here no accessToken'
        });
    }
};
exports.auth = auth;
