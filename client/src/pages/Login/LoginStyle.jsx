import styled from "styled-components";
import { Link } from "react-router-dom";

import { Input } from "../../globalStyle";

export const ContainerForm = styled.div`
    width: 300px;
    height: 50%;
    font-weight:bold;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius:5px;
    background-color: #1f2a59;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const Form = styled.form`
    width: 100%;
    height:60%;
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 10px;
 
`
export const FormTitle = styled.h1`
color:#ffff;
font-size:1.5rem;
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    margin:3px auto;
    align-items: center;
    height: 50px;
    width: 80%;
    border-radius:5px;
    gap: 5px;
    color: #ffff;
`

export const InputForm = styled(Input)`
    background-color: transparent;
    color:#ffff;
    border:1px solid rgba(255, 255, 255,.2);
`

export const ButtomForm = styled.button`
background-color: #5777f3;
color:#ffff;
width: 100px;
height: 35px;
border: none;
border-radius:5px;
margin-bottom:5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
cursor: pointer;
transition:.4s ease-in-out;
:hover{
    background-color: #246bfd;
}
`

export const LinkForm = styled(Link)`
   color: #246bfd;
    text-decoration:none;
    font-weight:bold;
    transition:.4s ease-in-out;
 
`
export const ContainerError = styled.span`
width: 90%;
height: 30px;
text-align: center;
color: #e60a0a;
font-size: 1rem;

`