import React from 'react'
import Input from './components/Input';
import Select from './components/Select';
import Textarea from './components/Textarea';
import RadioButtons from './components/RadioButtons';
import CheckboxGroup from './components/CheckboxGroup';
import DatePicker from './components/DatePicker';
import ChakraInput from './components/ChakraInput';

type ControlType = "input" | "textarea" | "select" | "radio" | "checkbox" | "date";

type FormikControlProps = {
    control: ControlType;
}

const FormikControl: React.FC<FormikControlProps & any> = (props) => {
    const { control, ...rest } = props;

    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <CheckboxGroup {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        case 'chakraInput':
            return <ChakraInput {...rest} />
        default:
            return null;
    }
}

export default FormikControl;