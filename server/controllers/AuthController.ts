import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import { generateToken } from '../utils/generateToken';

export class AuthController {
    register = async (req: express.Request, res: express.Response) => {
        const { name, email, password } = req.body;
        try {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ error: 'User with this email already exists' });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = User.create({
                name,
                email,
                password: hashedPassword,
                status: 'active',
                registrationDate: new Date(),
                lastLoginDate: null,
            });
            user.then(() => {
                res.status(201).json('Success. User registered successfully. Now you can login!');
            }).catch((error) => {
                res.status(400).json({ error: `Such a user exists` });
            });
        } catch (error) {
            res.status(500).json({ error: 'Failed to register user' });
        }
    };
    login = async (req: express.Request, res: express.Response) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            if (user.status === 'block') {
                return res.status(401).json({ error: 'The user is blocked' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Is there something wrong..' });
            }
            const lastLoginDate = await new Date();
            await user.update({ lastLoginDate });
            const token = generateToken(user.id, user.email);
            res.send({ token });
        } catch (error) {
            res.status(500).send('Failed to log in');
        }
    };
}
