import { CardModelItem } from "../../domain/cardDataItem";
import { MyModuleRepository } from "../../domain/repositoryImpl";
import { default as MyModuleItemModel } from "../model/mymodule.schema";
import { verifyToken, generateToken } from '../../application/card.utils'

export class MongoRepository implements MyModuleRepository {
	async findItem(token: string): Promise<CardModelItem> {
		const model = await MyModuleItemModel.findOne({ token });
		if (!model){
			throw new Error('item not found')
		}
		const cardItem: any | null = await verifyToken(model?.token);
		if (!cardItem) {
			throw new Error('service error')
		}
		const { cvv, iat, exp, ...newItemCard } = cardItem
		return newItemCard
	}

	async createItem(payload: CardModelItem): Promise<string | null> {
		const token = await generateToken(payload)
		const itemCreated = await MyModuleItemModel.create({ token });
		if (itemCreated) {
			return token;
		}
		return null;
	}
}
