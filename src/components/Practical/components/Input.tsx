import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik';
// import "../../../styles/YouTubeForm.css";
import ErrorText from './ErrorText';

type Props = {
    label: string,
    name: string,
    rest: any
}

const Input: FC<any> = (props) => {
    const { label, name, ...rest } = props;

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default Input