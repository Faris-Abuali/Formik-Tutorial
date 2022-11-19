import { ErrorMessage, Field } from 'formik';
import React from 'react'
import ErrorText from './ErrorText';
// import "../../../styles/YouTubeForm.css";


const TextArea: any = (props: any) => {
    const { label, name, ...rest } = props;

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default TextArea