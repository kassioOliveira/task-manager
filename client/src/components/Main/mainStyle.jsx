import styled from "styled-components";
import {FaBars} from 'react-icons/fa'
import {BsHouseDoor,BsTrash} from 'react-icons/bs'


export const MainComponentStyle = styled.main`

    width: calc(100% - 30%);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ffff;

    @media screen and (min-width: 760px) {
        justify-content: start;
        gap: 15px;
    }

    @media screen and (max-width: 550px) {
        justify-content: center;
    }
   
    
    @media screen and (max-width: 650px) {
        width: 100%;
        height: 100%;
    }
    
`;

export const TaskContainer = styled.div`
    height: 75%;
    width: 100%;
    border: 1px solid red;

    @media screen and (min-width: 760px) {
        margin-top:10px;
        margin-bottom:0;
    }

    @media screen and (max-width:550px) {
        margin-bottom:10px;
    }
`

export const SectionContainer = styled.section`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
overflow-y: auto;
border: 1px solid red;
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

export const TitleContainer = styled.div`
   display: flex;
   border: 1px solid red;
   width: 100%;
   height: 10%;
  
   @media screen and (min-width: 760px) {
    justify-content: center;
   align-items: center;
    }
`
export const IconTitle = styled(BsHouseDoor)`
    font-size:20px;
`

export const H1 = styled.h1`
    color:#ffff;
`
export const CheckboxInput = styled.input`
    
`
export const TaskName = styled.h2`
    color: #ffff;
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

export const IconTrash = styled(BsTrash)`
cursor: pointer;
:hover{
    color: red;
}
`