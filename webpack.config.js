// webpack.config.js
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            "@root": path.resolve(__dirname, '.'),
            "@config": path.resolve(__dirname, 'config/'),
            "@connections": path.resolve(__dirname, 'src/connections'),
            "@infra": path.resolve(__dirname, 'infra'),
        }
    }
};