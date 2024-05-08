import styled from "styled-components";
import { cores } from "../../styles";
import { Props } from ".";

export const ButtonContainer = styled.button<Props>`
    color: ${cores.vermelho};
    background-color: ${cores.bege};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border: none;
`