import styled from "styled-components";
import fundo from "../../assets/images/fundo.png"
import { Props } from ".";
import { Link } from "react-router-dom"
import { cores } from "../../styles";

export const Fundo = styled.div<Props>`
    width: 100%;
    height: ${props => props.type === "home" ? "360px" : "160px"};
    display: block;
    background-image: url(${fundo});

    .container {
        display: flex;

        ${props => props.type === "home" ? "flex-direction: column;" : (
            "font-weight: bold;"+
            "font-size: 18px;"
        )}
        
        align-items: center;
        background-color: transparent;
        justify-content: ${props => props.type === "home" ? "space-between" : "space-between"};
    }
`

export const LogoHome = styled.img`
    margin-top: 40px;
`

export const TituloHome = styled.h1`
    text-align: center;
    margin-bottom: 40px;
`

export const Voltar = styled(Link)`
    text-decoration: none;
    color: ${cores.vermelho};
`

export const CartButton = styled.a`
    display: flex;
    cursor: pointer;

    img {
        margin-left: 16px;
    }
`