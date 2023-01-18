import { SECRET_KEY } from '../../../config/configure'
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';

interface CustomRequest extends Request {
 token: string | JwtPayload;
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new Error();
    }

    const decoded = jsonwebtoken.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).send({ status: 'error', payload: 'Please authenticate' });
  }
};