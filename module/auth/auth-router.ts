import express from 'express';
import utility from "../utility";
import authController from './auth-controller';

const router = express.Router();

router.post('/', async (request, response) => {

    const publicAddress: any = request.body?.publicAddress;
    const nonce: any = request.body?.nonce;
    const signature: any = request.body?.signature;

    // type check
    if(typeof signature !== 'string' || typeof publicAddress !== 'string' || typeof nonce !== 'string') {
        response.writeHead(400);
        response.end();
        return;
    }

    utility.print(`POST /auth | ${publicAddress}`);

    const tokenResult = await authController.getToken(signature, publicAddress, nonce);

    if(tokenResult.auth) {

       response.json({
           token: tokenResult.token
       });

    } else {

        response.writeHead(401);
        response.end();

    }

});

export default router;
