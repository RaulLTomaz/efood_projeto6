import * as S from "./styles"

type Props = {
    children: JSX.Element
    title: string
    className?: string
}

const Card = ({ children, title, className }: Props) => (
    <S.Container className={className}>
        <h2>{title}</h2>
        {children}
    </S.Container>
)

export default Card