import React from 'react'
import { Field, ErrorMessage } from 'formik';
import DateView from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ErrorText from './ErrorText';

type Props = {
    label: string,
    name: string,
}

const DatePicker = (props: Props) => {
    const { label, name, ...rest } = props;

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    // Notice that here we didn't specify the as={} property of the Field component.
                    (formikProps: any) => {
                        const { field, form, meta } = formikProps;
                        const { setFieldValue } = form;
                        console.log("Field", field);
                        return (
                            <DateView
                                id={name}
                                {...field}
                                /**
                                 * field will take care of name, value, onChange, onBlur.
                                 */
                                {...rest}
                                selected={(field.value && new Date(field.value)) || null}
                                // We are using the setFieldValue method of Formik to set the value of the field.
                                // We override the default onChange event handler which is provided by the formikProps.field:
                                onChange={(val: Date | null) => form.setFieldValue(name, val)}
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default DatePicker