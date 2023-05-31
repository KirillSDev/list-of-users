import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
            };
        }
    }
}
export const tokenVerification = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.path === '/login' || req.path === '/register') {
        return next();
    }
    try {
        const token: string | null = 'token' in req.headers ? (req.headers.token as string) : null;

        if (!token) {
            res.status(400).send('You do not have access');
        } else {
            const decodedData = jwt.verify(token, process.env.SECRET_KEY!);

            req.user = decodedData as { id: string; email: string };
            const user = await User.findOne({
                where: {
                    id: req.user.id,
                },
            });
            if (user && user.status === 'block') {
                res.status(401).send('Your account is blocked');
            }
        }

        next();
    } catch (error) {
        res.status(400).send('You do not have access');
    }
};
