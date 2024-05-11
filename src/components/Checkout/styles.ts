import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";
import { Container as CardContainer } from "../Card/styles";

export const Container = styled.form`
    color: ${cores.bege};

    ${ButtonContainer} {
        margin-top: 8px;
    }

    ${CardContainer} {
        display: none;
    }

    .show {
        display: block;
    }
`
export const Row = styled.div`
    display: flex;
    column-gap: 24px;
`

export const InputGroup = styled.div`
    flex: auto;
    font-weight: bold;
    font-size: 14px;
    
    label {
        margin: 8px 0;
        display: block;
    }

    input, select {
        background-color: ${cores.bege};
        color: ${cores.cinza};
        font-weight: bold;
        border: 1px solid ${cores.vermelho};
        height: 32px;
        padding: 0 8px;
        width: 100%;

        &.error {
            border-color: red;
        }
    }

    &.numero-cartao {
        max-width: 228px;
        width: 100%;
    }
`

export const ContainerButtons = styled.div`
    margin-top: 16px;
`

export const ContainerConcluido = styled.div`
    color: ${cores.bege};

    p {
        margin-bottom: 24px;
    }
`