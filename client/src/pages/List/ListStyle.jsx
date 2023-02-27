import styled, { css } from "styled-components";
import { BsCheckAll, BsTrash } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export const MainComponent = styled.main`
      width: calc(100% - 30%);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ffff;
    background-color: ${({ bg }) => bg ? bg : 'transparent'};
    

    @media screen and (min-width: 760px) {
        justify-content: start;
        gap: 15px;
    }

    @media screen and (max-width: 650px) {
        justify-content: center;
    }
   
    
    @media screen and (max-width: 650px) {
        width: 100%;
        height: 100%;
    }
`

export const ListContainer = styled.div`
  height: 75%;
    width: 100%;
    @media screen and (min-width: 760px) {
        margin-top:10px;
        margin-bottom:0;
    }

    @media screen and (max-width:550px) {
        margin-bottom:10px;
    }
`
export const TitleContainer = styled.div`
   display: flex;
   width: 100%;
   height: 10%;
  justify-content: space-around;
  align-items: center;
   @media screen and (min-width: 760px) {
    justify-content: space-around;
   align-items: center;
    }
`
export const TitleSubContainer = styled.div`
    height: 100%;
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`
export const H1 = styled.h1`
    color:#ffff;
`
export const ContainerButtons = styled.div`
width: 200px;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
`
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
export const ButtonIncon = styled.button`
cursor: pointer;
border: none;
border-radius:5px;

${({ selected }) => selected && (css`
background-color: #1fe71f;

`)}

    
`
export const CheckedAllIcon = styled(BsCheckAll)`
    font-size: 20px;
`
export const ButtonInconDelete = styled(ButtonIncon)`
background-color: red;
color: #ffff;
padding: 5px;
display: none;

left: 10px;
${({ selected }) => selected && (css`
display: initial;

`)}
    
`
export const SectionContainer = styled.section`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    overflow-y: auto;

::-webkit-scrollbar{
    width: 8px;
}

::-webkit-scrollbar-thumb{
   // background-color: #8a81d26a;
   border: 1px solid #8a81d26a;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius:5px;
}

`
export const ArticleContainer = styled.article`
    width: 90%;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: space-around;
    gap:10px;
    align-items: center;
    margin: 15px 0;
    line-height:100px;
    border-radius:3px;
    border: 1px solid rgba(138, 129, 210, .2);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    @media screen and (max-width:550px) {
     height: 50px;
    }
  
   
`
export const ListNameContainer = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffff;
    cursor: pointer;
    padding: 0;
   height:50px;
   text-align: center;
    width: 40%; 
 
    
`
export const ListName = styled(Link)`
    text-decoration:none;
    color: #ffff;
     text-align:center;
    overflow: hidden;
    line-height: 50px;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 100%;
   height: 50px;
    

`
export const IconTrash = styled(BsTrash)`
cursor: pointer;
position:absolute;
right: 10px;
:hover{
    color: red;
}

display: initial;

${({ isvisible }) => isvisible.isVisibleCheckbox && (css`
display: none;
`)}
`;
export const CheckboxInput = styled.input`
    display: none;
position:absolute;
right: 10px;
    ${({ isVisible }) => isVisible && (css`
    display: initial;
    `)}

`