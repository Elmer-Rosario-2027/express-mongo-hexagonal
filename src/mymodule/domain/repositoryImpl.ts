import { CardModelItem } from "./cardDataItem";

export interface MyModuleRepository {
	/**
	 * Find item by token
	 * @param uuid
	 * @returns Promise with item found or null
	 */
	findItem(token: string): Promise<CardModelItem>;

	/**
	 * Create new item
	 * @param CardModelItem item
	 * @returns Promise with item created or null on error case
	 */
	createItem(user: CardModelItem): Promise<string | null>;
}
