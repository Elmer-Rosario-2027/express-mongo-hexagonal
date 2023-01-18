import { model, Schema } from "mongoose";

interface IMyModuleItem {
	token: string;
}

const MyModuleItemSchema = new Schema<IMyModuleItem>({
	token: {
		type: String,
		required: true,
		// unique: true,
	},
});

const MyModuleItemModel = model<IMyModuleItem>(
	"culqui_card",
	MyModuleItemSchema
);

export default MyModuleItemModel;
