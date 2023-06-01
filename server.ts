import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { sequelize } from './server/database';
import { AuthController } from './server/controllers/AuthController';
import { UserController } from './server/controllers/UserController';
import { tokenVerification } from './server/middleware/tokenVerification';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const Auth = new AuthController();
const User = new UserController();

const clientDistPath = path.resolve(__dirname, 'client/dist');

app.use(express.static(clientDistPath));
app.use(cors());
app.use(bodyParser.json());
app.use(tokenVerification);

app.post('/login', Auth.login);
app.post('/register', Auth.register);
app.get('/users', User.showAllUsers);
app.delete('/users', User.deleteUser);
app.patch('/users/block', User.blockUser);
app.patch('/users/unblock', User.unblockUser);

app.get('*', (req, res, next) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
});

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
