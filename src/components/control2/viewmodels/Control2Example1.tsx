import React from "react";

import ControlAutocompleteModel from "../models/ControlAutocomplete";
import ControlAutocompleteView from "../views/ControlAutocomplete";
import { CountryInfo, getCountryByName } from "../../../api/apiService";

type TPropsControl2Example1 = {
    maxHints?: number
}

function Control2Example1({maxHints = Infinity}: TPropsControl2Example1) {
    const model = new ControlAutocompleteModel();

    const handleChange = (value: string) => {
        model.setText(value);
        getCountryByName(value).then(res => {
            const data = res.reduce(
                (acc, hint) => {
                    if(acc.some(
                        _hint => (
                            hint.flag      === _hint.flag      && 
                            hint.fullName  === _hint.fullName  &&
                            hint.name      === _hint.name
                        )
                    )) {
                        return acc;
                    } else {
                        return [...acc, hint];
                    }
                    
                }, [] as CountryInfo[]
            ).filter(hint => hint.name !== model.text);

            model.setHints(data.slice(0, Math.min(data.length, maxHints)));
        })
    }

    return (
        <ControlAutocompleteView
            model={model}
            onChange={handleChange}
        />
    );
}

export default Control2Example1;