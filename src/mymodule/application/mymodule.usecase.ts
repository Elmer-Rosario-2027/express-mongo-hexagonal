import { v4 as uuidv4 } from "uuid";

import { MyModuleRepository } from "../domain/repositoryImpl";
import { CardModelItem } from "../domain/cardDataItem";

export class MyModuleUseCase {
	constructor(private readonly repository: MyModuleRepository) {}

	/**
	 * Get item by id use case
	 * @param uuid
	 * @returns
	 */
	public getItemByUuid(uuid: string): Promise<CardModelItem> {
		return this.repository.findItem(uuid);
	}

	/**
	 * Create new item use case
	 * @param name name of item
	 * @returns created item
	 */
	public createItem(payload: CardModelItem): Promise<string | null> {
		return this.repository.createItem(payload);
	}
}
