import { createPool } from 'mysql2/promise'
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} from './config.js'

export const connect = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: 3306,
    database: DB_DATABASE
})