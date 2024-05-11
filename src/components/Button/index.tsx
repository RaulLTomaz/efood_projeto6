import { ButtonContainer } from "./styles"

export type Props = {
    title: string
    to?: string
    onClick?: () => void
    children: string
    type: string
}

const Button = ({ children, title, to, onClick, type }: Props) => {
    return (
        <ButtonContainer type={type} title={title} onClick={onClick}>
            {children}
        </ButtonContainer>
    )
}

export default Button