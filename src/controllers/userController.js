import userRepository from '../repositories/userRepository.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await userRepository.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await userRepository.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};