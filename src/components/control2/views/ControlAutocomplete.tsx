import { observer } from "mobx-react-lite";
import ControlAutocompleteModel from "../models/ControlAutocomplete";
import { CountryInfo } from "../../../api/apiService";

import cls from "./style.module.css"

type TChange = (t: string)=>void;

type TPropsHint = {
    hint: CountryInfo,
    onClick: TChange,
}

function Hint({hint, onClick} : TPropsHint) {
    return (
        <div
            className={cls["container__hint"]} 
            onClick={()=>onClick(hint.name)}
        >
            <img 
                src={hint.flag} 
                alt={hint.fullName}
                title={hint.fullName}
            /> 
            <span>{hint.name}</span>
        </div>
    )
}

type TPropsControlAutocompleteView = {
    model: ControlAutocompleteModel,
    onChange: TChange,
}

export default observer(({model, onChange}: TPropsControlAutocompleteView) => {
    return (
        <div className={cls["container__control-autocomplete"]}>
            <input 
                className={cls["control-autocomplete__input"]}
                value={model.text} 
                onChange={e=>onChange(e.target.value)}
            />
            <div className={cls["container__hints"]}>
                {
                    model.hints.map((hint, i) => (
                        <Hint
                            key={i}
                            onClick={onChange}
                            hint={hint}
                        />
                    ))
                }
            </div>
        </div>
    )
});