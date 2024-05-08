import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
    width: 100%;
    background-color: ${cores.vermelho};
    color: ${cores.bege};
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Image = styled.img`
    max-width: 304px;
    width: 100%;
    height: 167px;
    object-fit: cover;
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