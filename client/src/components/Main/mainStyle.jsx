import styled from "styled-components";
import {FaBars} from 'react-icons/fa'
import {BsHouseDoor,BsTrash,BsThreeDotsVertical} from 'react-icons/bs'


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

    @media screen and (max-width: 650px) {
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
  justify-content: space-around;
  align-items: center;
   @media screen and (min-width: 760px) {
    justify-content: space-around;
   align-items: center;
    }
`
export const IconTitle = styled(BsHouseDoor)`
    font-size:30px;
`
export const TitleSubContainer = styled.div`
    border: 1px solid green;
    height: 100%;
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DropDownContainer = styled.div`
    border: 1px solid greenyellow;
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
`
export const DropDownSubContainer = styled.div`
    border: 1px solid blue;
    transition:5s ease-in-out;
    width: 100%;
    height: 500%;
    position: absolute;
    top:100%;
    z-index: 100;
    overflow: hidden;
`
export const DropDownListContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid yellow;
    position: absolute;
    overflow: hidden;
`
export const DropDownListItemContainer = styled.div`
    width: 100%;
    height: 30px;
    background-color:red;
`
export const ThreeDots = styled(BsThreeDotsVertical)`
    cursor: pointer;
    font-size:20px;
    margin-left:0;
`

export const H1 = styled.h1`
    color:#ffff;
`
export const CheckboxInput = styled.input`
    display: none;
`
export const TaskName = styled.h2`
    color: #ffff;
    cursor: pointer;
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