import jwt from 'jsonwebtoken';
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
