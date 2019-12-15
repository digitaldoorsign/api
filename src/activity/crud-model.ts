import {ModelType} from "@typegoose/typegoose/lib/types";

export interface CrudModel<T, W> {
	toApiModel(this: ModelType<T>): W;
	updateFromModel(this: ModelType<T>, updated: Partial<W>): void;
}
