import {getModelForClass, prop} from "@typegoose/typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {CrudModel} from "../crud-model";
import {TitleModel} from "@digitaldoorsign/core/lib/model/title-model";
import mongoose from "mongoose";

export class Title implements CrudModel<Title, TitleModel> {
	@prop({required: true})
	text!: string;

	toApiModel(this: ModelType<Title>): TitleModel {
		return {
			text: this.text
		};
	}

	updateFromModel(updated: Partial<TitleModel>): void {
		this.text = updated.text ?? this.text;
	}
}

export const TitleRecord = getModelForClass(Title);
