// webpack.config.js
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            "@root": path.resolve(__dirname, '.'),
            "@config": path.resolve(__dirname, 'config/'),
            "@connections": path.resolve(__dirname, 'src/connections'),
            "@controllers": path.resolve(__dirname, 'src/controllers'),
            "@models": path.resolve(__dirname, 'src/models'),
            "@services": path.resolve(__dirname, 'src/services'),
            "@routes": path.resolve(__dirname, 'src/routes'),
            "@infra": path.resolve(__dirname, 'infra'),
            "@middleware": path.resolve(__dirname, 'src/middleware'),
            "@validators": path.resolve(__dirname, 'src/middleware/validators'),
        }
    }
};