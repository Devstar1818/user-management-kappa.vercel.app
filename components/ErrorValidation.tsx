import { Text } from "@chakra-ui/react"

interface TextErrorProps {
    children?: string | React.ReactNode;
    component?: (props: TextErrorProps) => JSX.Element;
}

const ErrorValidation = ({ children }: TextErrorProps) => {
    return (
        <Text fontSize='sm' color="red">{children}</Text>
    )
}

export default ErrorValidation