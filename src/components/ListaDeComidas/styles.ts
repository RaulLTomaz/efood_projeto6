import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const Container = styled.div`
    margin-top: 56px;
    margin-bottom: 120px;

    li {
        list-style: none;
    }
`

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.visivel {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`

export const ModalContainer = styled.div`
    max-width: 1024px;
    width: 100%;
    max-height: 344px;
    height: 100%;
    position: relative;
    background-color: ${cores.vermelho};
    z-index: 1;

    @media (max-width: ${breakpoints.tablet}) {
        max-height: 600px;
    }
`

export const FecharImg = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
`

export const ModalContent = styled.div`
    color: ${cores.bege};
    display: flex;
    width: 100%;
    height: 100%;
    padding: 32px;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`

export const ImagemModal = styled.img`
    max-width: 280px;
    width: 100%;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
`

export const ModalTitulo = styled.h3`
    font-size: 18px;
    font-weight: 900;
`

export const ModalDescricao = styled.p`
    font-size: 14px;
    padding: 16px 0;
`

export const ModalBotao = styled.button`
    padding: 4px 6px;
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;
`