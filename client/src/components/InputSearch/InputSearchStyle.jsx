import styled from "styled-components";
import {FaSearch} from 'react-icons/fa'
import { Input } from "../../globalStyle";

export const InputSearchContainer = styled.div`
    border:1px solid #ffff;
    border-radius:5px;
    width: 90%;
    height:30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const InputSearchStyled = styled(Input)`
    background-color: transparent;
    width: 80%;
    border: none;
    color: #ffff;
`

export const IconSearch = styled(FaSearch)`
      padding: 0;
      font-size:23px;
      cursor: pointer;
      color: #ffff;
`