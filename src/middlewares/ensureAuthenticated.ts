import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, "34f8ed8d5e4745a6963550edf1fe1dd7") as IPayload;

        request.user_id = sub;

    } catch (err) {
        return response.status(401).end();
    }

    return next();
}