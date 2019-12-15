import {CrudActivity} from "../crud-activity";
import {Title, TitleRecord} from "./title";

export class TitleActivity extends CrudActivity<Title> {
	constructor() {
		super(TitleRecord);
	}
}
