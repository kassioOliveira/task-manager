import styled from "styled-components";

import { Input } from "../../globalStyle";


export const ContainerInputAdd = styled.div`
    width: 85%;
    height: ${({h})=>(h ? h: '45px')};
    border-radius:5px;
    display: flex;
    justify-content: space-around;
    align-items: center;  
    
`

export const InputAddCompenent = styled(Input)`
color: #ffff;
background-color: transparent;
border: 1px solid #fff;
`