import styled from "styled-components";
import {FaBars} from 'react-icons/fa'


export const MainComponentStyle = styled.main`

    width: calc(100% - 30%);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    
    @media screen and (max-width: 650px) {
        width: 100%;
        height: 100%;
    }
    
`;

export const IconBar = styled(FaBars)`
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    @media screen and (min-width: 650px) {
        display: none;
    }
`