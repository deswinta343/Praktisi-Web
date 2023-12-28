const data = require('./users.json');

function getAllUsers() {
    return data;
}

module.exports = {
    getAllUsers,
}