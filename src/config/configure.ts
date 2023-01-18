import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.basename(`${__dirname}../../.env` )})

const MONGODB_CNN = process.env.MONGODB_CNN ?? '';
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET ?? '';
export { SECRET_KEY, MONGODB_CNN }