import { ButtonContainer } from "./styles"

export type Props = {
    title: string
    to?: string
    onClick?: () => void
    children: string
}

const Button = ({ children, title, to, onClick }: Props) => {
    return (
        <ButtonContainer type="button" title={title} onClick={onClick}>
            {children}
        </ButtonContainer>
    )
}

export default Button