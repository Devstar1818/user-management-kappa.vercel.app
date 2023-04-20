import { RadioGroup, Radio, Stack, FormControl } from "@chakra-ui/react"
import { Field, FieldProps } from "formik"

type RadioInputProps = {
    name: string
}

const RadioInput = (props: RadioInputProps) => {
    return (
        <Field name={props.name}>
            {({ field }: FieldProps) => {
                return (
                    <FormControl width={{ base: "100%", "md": "400px" }} id={props.name}>
                        <RadioGroup {...field} id={props.name} {...props}>
                            <Stack direction='row' spacing={4}>
                                {["Active", "InActive"].map(value => (
                                    <Radio
                                        colorScheme={value === "Active" ? "green" : "red"}
                                        size='lg' key={value} {...field} value={value}>
                                        {value}
                                    </Radio>
                                ))}
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                )
            }}
        </Field>
    )
}

export default RadioInput