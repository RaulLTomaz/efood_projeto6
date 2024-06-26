import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.div`
    margin-top: 80px;
    margin-bottom: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`