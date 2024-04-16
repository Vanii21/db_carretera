const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const saltRouds = 10;
    return await bcrypt.hash(password, saltRouds);
}

const comparePasswords = async (plainPassword, hashedPassword) => {
    const result = await bcrypt.compare(plainPassword, hashedPassword);
    return result;
} 

module.exports = { hashPassword, comparePasswords };