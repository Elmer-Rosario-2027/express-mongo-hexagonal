import jsonwebtoken from 'jsonwebtoken'
import { CardModelItem } from '../domain/cardDataItem'
import { SECRET_KEY } from '../../config/configure'

const verifyToken = async (token: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, SECRET_KEY, (error, data) => {
            if (error) {
                reject(null);
            }
            resolve(data);
        });
    });
}

const generateToken = async (item: CardModelItem): Promise<string> => {
    const token = jsonwebtoken.sign(item, SECRET_KEY, {
        expiresIn: "365d",
    });
    return token
}

export { verifyToken, generateToken }