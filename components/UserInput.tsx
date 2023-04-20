import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import { Field, FieldProps, ErrorMessage } from "formik"
import ErrorValidation from "./ErrorValidation"

interface InputProps<T> {
    label: T,
    name: T,
    type: T,
    placeholder?: T,
}

const UserInput = (props: InputProps<string>) => {
    return (
        <Field name={props.name} >
            {({ field, form }: FieldProps) => {
                return (
                    <FormControl
                        width={{ base: "100%", "md": "400px" }}
                        id={props.name}
                        isInvalid={!!form.errors[props.name] && !!form.touched[props.name]}>
                        <FormLabel>{props.label}</FormLabel>
                        <Input size='lg' marginBottom={1} type={props.type} placeholder={props.placeholder} {...field} />
                        <ErrorMessage name={props.name} component={ErrorValidation} />
                    </FormControl>
                )
            }}
        </Field>
    )
}

export default UserInput