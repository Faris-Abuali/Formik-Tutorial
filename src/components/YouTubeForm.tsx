import { useFormik } from 'formik';
import React from 'react';
import "../styles/YouTubeForm.css";
import { validationSchema } from './validation';

type Props = {}

interface FormikValues {
    name: string;
    email: string;
    channel: string;
}

const initialValues = {
    name: '',
    email: '',
    channel: ''
};

const onSubmit = (values: FormikValues) => {
    console.log(values);
}

// * Replaced by Yup validationSchema
const validate = (values: FormikValues) => {
    let errors: Partial<FormikValues> = {};
    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.channel) {
        errors.channel = 'Required';
    }

    return errors;
}

const YouTubeForm = (props: Props) => {

    const { values, handleChange, handleSubmit, handleBlur, errors, touched, getFieldProps } = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    });

    return (
        <div>
            <form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        // getFieldProps will return an object with the following properties:
                        // onBlur, onChange, value, name
                        {...getFieldProps('name')}
                    />
                    {touched.name && errors.name && <div className="error">{errors.name}</div>}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        {...getFieldProps('email')}
                    />
                    {touched.email && errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input
                        type='text'
                        id='channel'
                        {...getFieldProps('channel')}
                    />
                    {touched.channel && errors.channel && <div className="error">{errors.channel}</div>}
                </div>

                <button
                    type='submit'
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        handleSubmit()
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default YouTubeForm