import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
    height: 100%;
    border: 1px solid ${cores.vermelho};
    background-color: #fff;
    position: relative;
`

export const TituloEEstrela = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
`

export const Estrela = styled.span`
    display: flex;
    align-items: center;

    img {
        margin-left: 8px;
    }
`

export const Descricao = styled.p`
    font-size: 14px;
    font-weight: 400;
    padding: 16px 8px 8px;
`

export const Botao = styled.button`
    margin: 8px;
    padding: 4px 6px;
    font-size: 14px;
    font-weight: bold;
    background-color: ${cores.vermelho};
    color: ${cores.bege};
    border: none;
    cursor: pointer;
`

export const Info = styled.div`
    position: absolute;
    top: 16px;
    right: 8px;

    ${TagContainer} {
        margin-left: 8px;
    }
`

export const Image = styled.img`
    max-width: 472px;
    width: 100%;
    height: 217px;
    object-fit: cover;
`