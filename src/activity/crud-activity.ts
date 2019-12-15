import {ReturnModelType} from "@typegoose/typegoose";

export abstract class CrudActivity<T extends ReturnModelType<any>> {
	constructor(private record: T) { }

	public list(): void {
		console.log("list!");
		this.record.find((err: any, res: any) => {
			console.log(res);
		});
	}
}
