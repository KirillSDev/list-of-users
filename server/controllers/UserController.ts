import express from 'express';
import User from '../models/User';
export class UserController {
    showAllUsers = async (req: express.Request, res: express.Response) => {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'status', 'registrationDate', 'lastLoginDate'],
        });
        res.status(200).json(users);
    };
    blockUser = async (req: express.Request, res: express.Response) => {
        for (const id of req.body.id) {
            const user = await User.findOne({
                where: { id: id },
            });
            await user?.update({
                status: 'block',
            });
            if (req.user?.id === id) {
                res.status(401).send('the user is blocked');
            }
        }
    };
    unblockUser = async (req: express.Request, res: express.Response) => {
        for (const id of req.body.id) {
            const user = await User.findOne({
                where: { id: id },
            });
            await user?.update({
                status: 'active',
            });
        }
    };
    deleteUser = async (req: express.Request, res: express.Response) => {
        for (const id of req.body.id) {
            await User.destroy({
                where: { id: id },
            });
            if (req.user?.id === id) {
                res.status(401).send('User deleted');
            }
        }
    };
}
