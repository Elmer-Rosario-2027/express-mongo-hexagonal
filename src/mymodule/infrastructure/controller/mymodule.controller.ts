import { Request, Response } from "express";

import { validatePayload } from '../../application/validate.requestItem'
import { MyModuleUseCase } from "../../application/mymodule.usecase";
import { CardModelItem } from "../../domain/cardDataItem";
import { MongoRepository } from "../repository/mongo.repository";

const service = new MyModuleUseCase(new MongoRepository());
const findItem = async (req: Request, res: Response) => {
	try {
		const headers = req.headers.authorization;
		if (!headers) {
			throw new Error('item not found')
		}

		const [, token] = headers.split(" ");
		const result: CardModelItem  = await service.getItemByUuid(token);
		return res.status(200).json({ status: 'success', payload: result });
	} catch (error) {
		res.status(400).send({ status: 'error', payload: 'error service' });
	}
};

const createItem = async (req: Request, res: Response) => {
	const payload: CardModelItem = req.body;
	try {
		await validatePayload(payload)
		const reponseItem: string | null = await service.createItem(payload);
		if (!reponseItem) {
			throw new Error('item not found')
		}
		return res.status(200).json({ status: 'success', payload: reponseItem });
	} catch (error: any) {
		console.log(error)
		res.status(400).send({ status: 'error', payload: error?.message ?? 'error service' });
	}
};

export { createItem, findItem };
