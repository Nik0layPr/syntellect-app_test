import ControlTextModel from "../models/ControlText";
import ControlTextView from "../views/ControlText";

export default function Control1Example1() {
    const model = new ControlTextModel("TEST");

    return (
        <ControlTextView
            model={model}
            rightButtons={[
                {
                    text: "clear",
                    onClick: ()=>{
                        model.setText("");
                    }
                },
                {
                    text: "print 'Hello world!'",
                    onClick: ()=>{
                        model.setText("Hello world!");
                    }
                }
            ]}
        />
    )
}