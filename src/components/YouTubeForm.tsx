// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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

    // const { values, handleChange, handleSubmit, handleBlur, errors, touched, getFieldProps } = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate
    //     validationSchema
    // });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => {
                return (
                    <Form>
                        <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <Field
                                type='text'
                                name='name'
                            // getFieldProps will return an object with the following properties:
                            // onBlur, onChange, value, name  
                            />
                            <ErrorMessage name='name' />
                            {/* ErrorMessage component conditionally renders only if the field has been visited (touched) and the error exists */}
                        </div>

                        <div className='form-control'>
                            <label htmlFor='email'>Email</label>
                            <Field
                                type='email'
                                name='email'
                            />
                            <ErrorMessage name='email' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='channel'>Channel</label>
                            <Field
                                type='text'
                                name='channel'
                            />
                            <ErrorMessage name='channel' />
                        </div>

                        <button
                            type='button'
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default YouTubeForm