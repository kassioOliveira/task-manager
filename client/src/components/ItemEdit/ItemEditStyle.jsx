import styled, { css } from "styled-components";
import { Input } from "../../globalStyle";
import {CgClose} from 'react-icons/cg';

export const ItemContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 150;
    background-color: #1f2a59;
    ${({isEditable}) => isEditable && css`
        display: initial;
    `}
`;

export const ItemSubContainer = styled.form`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius:5px;
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #1f2a59;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media screen and (max-width: 280px) {
        width: 80%;
        height: 70%;
    }
`;

export const LabelTitle = styled.label`
display: flex;
flex-direction:column;
justify-content: space-around;
align-items: center;
width: 80%;
height: 60px;

`
export const LabelDescription = styled(LabelTitle)`
height: 130px;

`
export const InpuTitle = styled(Input)`
width: 100%;
height: 60%;
border:1px solid rgba(255, 255, 255,.2);
color: #fff;
background-color: transparent;
    
`

export const InputDescription = styled.textarea`
max-width: 100%;
max-height: 75%;
min-width: 100%;
min-height: 75%;
border-radius:5px;
border:1px solid rgba(255, 255, 255,.2);
color: #fff;
background-color: transparent;
outline: none;
box-shadow: 0000;
resize: none;

::-webkit-scrollbar{
    width: 8px;
    
}

::-webkit-scrollbar-thumb{
   // background-color: #8a81d26a;
   cursor: pointer;
   border: 1px solid #8a81d26a;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius:5px;
}

`

export const CheckBoxContainer = styled.div`
    width: 80%;
    height: 130px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
`
export const CheckBoxItem = styled.div`
    width: 90%;
    height: 27px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(138, 129, 210, .2);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

`

export const CheckBox = styled.input`
width: 50px;
border: 1px solid red;
font-size:50px;

`

export const SelectValue = styled.select`
width: 60%;
height: 30px;
outline: none;
box-shadow:0000;
cursor: pointer;
color: ${({vl})=> vl? '#fff' : 'gray'};
background-color:transparent;
`
export const Option = styled.option`
 background-color: #1f2a59;
 font-size: 15px;
 color: ${({cl}) => cl? cl: '#fff'};

`
export const CloseEdit = styled(CgClose)`
position: absolute;
top: 10px;
right: 10px;
font-size: 30px;
cursor: pointer;
`

export const ConfirmButton = styled.button`
border: 1px solid green;
color: #fff;
background-color: green;
border: none;
border-radius:5px;
padding: 10px;
cursor: pointer;
`

export const ListEdit = styled(ItemSubContainer)`
height: 25%;
justify-content: space-evenly;
`