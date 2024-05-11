import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";
import lixeira from "../../assets/images/lixeira.png"

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open{
        display: flex;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .7;
`

export const SideBar = styled.aside`
    background-color: ${cores.vermelho};
    z-index: 1;
    padding: 32px 8px 0;
    max-width: 360px;
    width: 100%;

    ${ButtonContainer} {
        width: 100%;
        padding: 4px 0;
        font-size: 14px;
        font-weight: bold;
    }

    .empty-text {
        font-size: 14px;
        line-height: 22px;
        color: ${cores.bege};
        text-align: center;
        font-weight: bold;
    }
`

export const CartItem = styled.li`
    display: flex;
    padding: 8px;
    position: relative;
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    margin-bottom: 16px;

    & > img {
        height: 80px;
        max-width: 80px;
        width: 100%;
        object-fit: cover;
        margin-right: 8px;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    span {
        margin-top: 16px;
        display: block;
        font-size: 14px;
        font-weight: 400;
    }

    button {
        background-image: url(${lixeira});
        width: 16px;
        height: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        bottom: 8px;
        right: 8px;
    }
`

export const Prices = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: ${cores.bege};
    margin: 24px 0 16px;
    display: flex;
    justify-content: space-between;
`