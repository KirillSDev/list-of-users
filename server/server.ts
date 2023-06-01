import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './database';
import { AuthController } from './controllers/AuthController';
import { UserController } from './controllers/UserController';
import { tokenVerification } from './middleware/tokenVerification';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const Auth = new AuthController();
const User = new UserController();

app.use(
    cors({
        origin: 'https://list-of-users-4zh4.vercel.app/',
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    })
);
app.use(bodyParser.json());
app.use(tokenVerification);

app.get('/', tokenVerification, (req, res) => {
    if (req.user?.id) {
        const user = req.user;
        res.json({ user });
    }
});
app.post('/login', Auth.login);
app.post('/register', Auth.register);
app.get('/users', User.showAllUsers);
app.delete('/users', User.deleteUser);
app.patch('/users/block', User.blockUser);
app.patch('/users/unblock', User.unblockUser);

sequelize
    .sync()
    .then(() => {
        console.log('Connected to the database');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error: Error) => {
        console.error('Failed to connect to the database:', error);
    });
