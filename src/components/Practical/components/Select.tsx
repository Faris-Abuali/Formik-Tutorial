import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik';
// import "../../../styles/YouTubeForm.css";
import ErrorText from './ErrorText';

type Props = {
    label: string,
    name: string,
    rest: any
}

const Select: FC<any> = (props) => {
    const { label, name, options, ...rest } = props;

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name} {...rest}>
                {
                    options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    ))
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default Select