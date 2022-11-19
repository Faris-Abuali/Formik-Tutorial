import React from 'react'
import { Field } from 'formik';
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react';

type Props = {
    label: string;
    name: string;
}

const ChakraInput = (props: Props) => {
    const { label, name, ...rest } = props;
    return (
        <Field name={name}>
            {({ field, form }: any) => (
                <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                    <FormLabel htmlFor={name}>{label}</FormLabel>
                    <Input id={name} {...rest} {...field} />
                    {/* ...field will take care of name, value, onChange, onBlur. */}
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    )
}

export default ChakraInput