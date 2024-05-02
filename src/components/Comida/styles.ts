import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
    width: 100%;
    background-color: ${cores.vermelho};
    color: ${cores.bege};
    padding: 8px;
`

export const Titulo = styled.h3`
    font-weight: 900;
    font-size: 16px;

`

export const Descricao = styled.p`
    padding: 8px 0;
    font-size: 14px;
    font-weight: 400;
`

export const Botao = styled.button`
    width: 100%;
    padding: 4px;
    text-align: center;
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
`