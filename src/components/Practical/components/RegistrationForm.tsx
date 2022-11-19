import React from 'react'
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../FormikControl';

type Props = {}

const RegistrationForm = (props: Props) => {
    const optionsModeOfContact = [
        { key: 'Email', value: 'emailmoc' },
        { key: 'Telephone', value: 'telephonemoc' },
    ]

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf(
            // The oneOf method is used to check if the value of the field is equal to one of the values specified in the array.
            [Yup.ref('password'), ''],
            'Passwords must match'
        ).required('Required'),
        modeOfContact: Yup.string().required('Required'),
        // phone is required only if selected modeOfContact is telephone:
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Required')
        })
    });

    const onSubmit = (values: any, onSubmitProps: FormikHelpers<any>) => {
        console.log("Form data", values);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                    />

                    <FormikControl
                        control='input'
                        type='password'
                        label='Password'
                        name='password'
                    />

                    <FormikControl
                        control='input'
                        type='password'
                        label='Confirm Password'
                        name='confirmPassword'
                    />

                    <FormikControl
                        control='radio'
                        label='Mode of Contact'
                        name='modeOfContact'
                        options={optionsModeOfContact}
                    />

                    <FormikControl
                        control='input'
                        type='text'
                        label='Phone Number'
                        name='phone'
                    />

                    <button
                        type="submit"
                        disabled={!formik.isValid}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default RegistrationForm