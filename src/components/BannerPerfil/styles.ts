import styled from "styled-components";
import espaguete from "../../assets/images/espaguete.png"

export const BannerFundo = styled.div`
    width: 100%;
    height: 280px;
    display: block;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${espaguete});
    background-repeat: no-repeat;
    background-size: cover;

    .container {
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 32px;
    }
`

export const Tipo = styled.h3`
    font-weight: 100;
    padding-top: 24px;
`

export const Titulo = styled.h2`
    font-weight: 900;
    padding-bottom: 32px;
`