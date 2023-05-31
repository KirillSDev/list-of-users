import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, Optional } from 'sequelize';
import { sequelize } from '../database';
import { IUser } from '../interfaces/User.interface';

interface IUserModel extends Optional<IUser, 'id'> {}
interface IUserInstance extends Model<IUser, IUserModel>, IUser {}

const User = sequelize.define<IUserInstance>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('active', 'block'),
        defaultValue: 'active',
    },
    registrationDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    lastLoginDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

export default User;
