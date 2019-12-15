import {CrudModel} from "./crud-model";
import {ReturnModelType} from "@typegoose/typegoose";
import {AnyParamConstructor} from "@typegoose/typegoose/lib/types";

export abstract class CrudActivity<T extends CrudModel<any, any>> {
	protected constructor(private record: ReturnModelType<AnyParamConstructor<T>>) { }

	public list(): void {
		console.log("list!");
		this.record.find((err: any, res: any) => {
			console.log(res);
		});
	}
}
