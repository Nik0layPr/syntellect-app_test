import { action, makeObservable, observable } from "mobx";

class IControlTextModel {
    text: string;

    constructor(text: string = "") {
        this.text = text;

        makeObservable(this, {
            text: observable,
            setText: action,
        })
    }

    setText(text: string) {
        this.text = text;
    }
}

export default IControlTextModel;