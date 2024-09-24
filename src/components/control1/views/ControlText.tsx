import { observer } from "mobx-react-lite";
import cls from './style.module.css';

import ControlTextModel from '../models/ControlText';

type TPropsButton = {
    text?: string,
    onClick: ()=>void,
}

function Button({text, onClick}: TPropsButton) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

type TPropsButtons = {
    buttons?: TPropsButton[],
    side?: 'left' | 'right'
}

function Buttons({buttons, side = 'left'}: TPropsButtons) {
    return (
        <div className={cls[`container__buttons-${side}`]}>
            {
                buttons?.map((button, i) => (
                    <Button 
                        key={i} 
                        text={button.text} 
                        onClick={button.onClick}
                    />
                ))
            }
        </div>
    );
}

type TPropsControlTextView = {
    leftButtons?: TPropsButton[],
    rightButtons?: TPropsButton[],
    model: ControlTextModel,
}


export default observer(({model, leftButtons, rightButtons}: TPropsControlTextView) => {
    return (
        <div className={cls['container__control-text']}>
            <Buttons 
                buttons={leftButtons}
            />
            <input 
                className={cls["control-text"]}
                value={model.text} 
                onChange={e=>model.setText(e.target.value)}
            />
            <Buttons 
                side="right"
                buttons={rightButtons}
            />
        </div>
    )
});