import styled from "styled-components";
import { cores } from "../../styles";

export const FooterBar = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${cores.bege};
    

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        max-width: 480px;
        height: 300px;
    }
`

export const LogoESocial = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Socials = styled.ul`
    margin-top: 32px;
    max-width: 88px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Aviso = styled.p`
    font-size: 10px;
    text-align: center;
    margin-bottom: 40px;
`