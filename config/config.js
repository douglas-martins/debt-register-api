/**
 * Debt register project.
 *
 * Config file, part of core tasks.
 *
 * @package  Express
 * @author Douglas Martins <douglasfabiamartins@hotmail.com>
 *
 */

dotenv = require('dotenv');

const envFound = dotenv.config({path: '.env'});

if (!envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
    /**
     * Default timezone
     */
    timezone: 'America/Sao_Paulo',

    /**
     * Default system language
     */
    language: 'en',

    /**
     * Application version
     */
    appVersion: process.env.APP_VERSION,

    /**
     * Your favorite port for server listening
     */
    port: parseInt(process.env.PORT, 10),

    /**
     * App base url
     */
    baseUrl: process.env.HOST,

    /**
     * Database credentials.
     *
     * 1. Database user
     * 2. User password
     * 3. Database name
     * 4. Database address
     */
    db: {
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT
    },
};