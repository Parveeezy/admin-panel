import CellComponent from '../CellComponent';
import SelectComponent from '../../SelectComponent';
import { ButtonComponent } from '../../ButtonComponent';

const ActionCellComponent = ({ actions, values, index }) => {
    return (
        <CellComponent>
            {actions.map((action, ind) => {
                if (action.type === 'select') {
                    return (
                        <SelectComponent
                            key={ind}
                            options={action.options}
                            text={action.label}
                            value={values[action.field]}
                            onChange={(newValue) => action.onChange(index, newValue)}
                        />
                    )
                }

                if (action.type === 'button') {
                    return <ButtonComponent key={index} {...action} />
                }

                return null;
            })}
        </CellComponent>
    )
};

export default ActionCellComponent;
