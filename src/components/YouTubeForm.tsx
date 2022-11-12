// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import React from 'react';
import "../styles/YouTubeForm.css";
import TextError from './TextError';
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
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: [''], // We start off by asking for one phone number
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
                                id='name'
                            // getFieldProps will return an object with the following properties:
                            // onBlur, onChange, value, name  
                            />
                            <ErrorMessage
                                name='name'
                                component={TextError}
                            />
                            {/* ErrorMessage component conditionally renders only if the field has been visited (touched) and the error exists */}
                        </div>

                        <div className='form-control'>
                            <label htmlFor='email'>Email</label>
                            <Field
                                type='email'
                                name='email'
                                id='email'
                            />
                            <ErrorMessage name='email'>
                                {errorMsg => <div className='error'>{errorMsg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='channel'>Channel</label>
                            <Field
                                type='text'
                                name='channel'
                                id='channel'
                                placeholder='YouTube channel name'
                            />
                            <ErrorMessage name='channel' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='comments'>Comments</label>
                            <Field
                                as='textarea' // to decide what element to render
                                // `as` and `component` props are similar to `render` prop in React Router
                                id='comments'
                                name='comments'
                            />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='address'>Address</label>
                            <Field name='address'>
                                {(props: any) => {
                                    // console.log(props);
                                    const { field, form, meta } = props;
                                    console.log(props);
                                    return (
                                        <div>
                                            <input type='text' id='address' {...field} />
                                            {/* field will take care of name, value, onChange, onBlur,*/}
                                            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                                        </div>
                                    )
                                }}
                            </Field>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='facebook'>Facebook Profile</label>
                            <Field type='text' id='facebook' name='social.facebook' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='twitter'>Twitter Profile</label>
                            <Field type='text' id='twitter' name='social.twitter' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='primaryPh'>Primary Phone Number</label>
                            <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='secondaryPh'>Secondary Phone Number</label>
                            <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                        </div>

                        <div className='form-control'>
                            <label>List of Phone Numbers</label>
                            <FieldArray name='phNumbers'>
                                {(fieldArrayProps) => {
                                    console.log(fieldArrayProps);
                                    const { push, remove, form } = fieldArrayProps;
                                    const { values } = form;
                                    const { phNumbers } = values;


                                    return <section>
                                        {phNumbers.map((phNumber: string, index: number) => (
                                            <div
                                                key={index}
                                                className="phNumbersSection"
                                            >
                                                <Field name={`phNumbers[${index}]`} className="phNumberField" />
                                                {index > 0 && (
                                                    <button
                                                        type='button'
                                                        onClick={() => remove(index)}
                                                    >
                                                        -
                                                    </button>
                                                )}
                                                <button
                                                    type='button'
                                                    onClick={() => push('')}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ))}
                                    </section>
                                }}
                            </FieldArray>
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