import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const generateToken = (id: number, email: string) => {
    const SECRET_KEY = process.env.SECRET_KEY;
    const payload = {
        id,
        email,
    };
    const token = jwt.sign(payload, SECRET_KEY!, {
        expiresIn: '24h',
    });
    return token;
};
