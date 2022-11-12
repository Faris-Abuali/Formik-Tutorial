import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik';
import "../../../styles/YouTubeForm.css";
import "./styles/RadioButtons.css";
import ErrorText from './ErrorText';

type Props = {
    label: string,
    name: string,
    rest: any
}

const RadioButtons: FC<any> = (props) => {
    const { label, name, options, ...rest } = props;

    return (
        <div className='form-control'>
            <label>{label}</label>
            <section
                className='radioGroup'
  
            >
                <Field as="radio" name={name} {...rest}>
                    {
                        (formikProps: any) => {
                            const { field, form, meta } = formikProps;
                            console.log("Field", field);
                            // Note: field.value is the value of the entire radio button group as it is selected.

                            return options.map((option: { key: string, value: string }) => (
                                <div key={option.key}>
                                    <input
                                        type="radio"
                                        id={option.value}
                                        {...field}
                                        /**
                                         * field will take care of name, value, onChange, onBlur.
                                         */
                                        value={option.value}
                                        checked={option.value === field.value}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </div>
                            ))
                        }
                    }
                </Field>
            </section>
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default RadioButtons