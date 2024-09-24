import ControlTextModel from "../models/ControlText";
import ControlTextView from "../views/ControlText";

export default function Control1Example2() {
    const model = new ControlTextModel("TEST");

    return (
        <ControlTextView
            model={model}
            rightButtons={[
                {
                    text: "alert(${state})",
                    onClick: ()=>{
                        alert(model.text)
                    }
                }
            ]}
            leftButtons={[
                {
                    text: "if alert(${state})",
                    onClick: ()=>{
                        if(!isNaN(parseFloat(model.text))) alert(model.text)
                    }
                }
            ]}
        />
    )
}