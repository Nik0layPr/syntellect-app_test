import { action, makeObservable, observable } from "mobx";
import IControlTextModel from "../../shared/IControlTextModel";
import { CountryInfo } from "../../../api/apiService";

class ControlAutocompleteModel extends IControlTextModel {
    hints: CountryInfo[];

    constructor() {
        super();

        this.hints = [];

        makeObservable(this, {
            hints: observable,
            setHints: action,
        });
    }

    setHints(hints: CountryInfo[]) {
        this.hints = hints;
    }
}

export default ControlAutocompleteModel;