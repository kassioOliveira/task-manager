import styled, { css } from "styled-components";
import {FaBars} from 'react-icons/fa'
import {BsTrash,BsCheckAll,BsStar,BsStarFill, BsList,BsArrowDownCircleFill} from 'react-icons/bs'


export const MainComponentStyle = styled.main`

    width: calc(100% - 30%);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ffff;
    background-color: ${({bg}) => bg? bg: 'transparent' };
    

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

export const ContainerButtons = styled.div `
width: 200px;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
border: 1px solid red;
`

export const ContainerDropDownList = styled.div`
position: absolute;
transition: all .6s ease-in;
width: 95%;
height: 0px;
padding: 5px;
background-color: #1f2a59;
top: 103%;
left: 0;
z-index: 100;
overflow: hidden;

${({drop}) => drop && css`
    height: 150px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`}

`
export const SubContainerDropDown = styled.div`
height: 100%;
width: 100%;

overflow: auto;
::-webkit-scrollbar{
    width: 8px;
}

::-webkit-scrollbar-thumb{
   // background-color: #8a81d26a;
   border: 1px solid #8a81d26a;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius:5px;
}
:hover{
    ::-webkit-scrollbar-thumb{
   border: 1px solid #ffff;

}
}
`

export const ItemDropDown = styled.div`
width: 90%;
height: 30px;
color: gray;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid rgba(138, 129, 210, .2);
border-radius:5px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
margin:5px auto;
cursor: pointer;

:hover{
    color: #ffff;
    border: 1px solid #FFFF;
}
`

export const H1 = styled.h1`
    color:#ffff;
`
export const CheckboxInput = styled.input`
    display: none;

    ${({isVisible}) => isVisible && (css`
    display: initial;
    `)}
`
export const TaskNameContainer = styled.div`
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
export const TaskName = styled.span`
     text-align:center;
    overflow: hidden;
    line-height: 50px;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 100%;
   height: 50px;
    

`
export const CheckedAllIcon = styled(BsCheckAll)`
    font-size: 20px;
`
export const CheckListIcon = styled(BsList)`
position: absolute;
right: 10px;
cursor: pointer;
${({selected}) => selected && (css`
display: none;

`)}

${({listselected}) =>listselected.tasksListChecked && (css`
display: initial;

`)}
`
export const ButtonIncon = styled.button`
cursor: pointer;
border: none;
border-radius:5px;
position: absolute;
right: 40%;

${({listSelected}) =>listSelected && (css`
display: none;

`)}

${({selected}) => selected && (css`
background-color: #1fe71f;

`)}

    
`
export const ButtonInconDelete = styled(ButtonIncon)`
background-color: red;
color: #ffff;
padding: 5px;
display: none;
right: initial;
left: 10px;
${({selected}) => selected && (css`
display: initial;

`)}
    
`

export const ButtonAdd = styled(BsArrowDownCircleFill)`
 font-size: 20px;
color: #ffff;
border: none;
cursor: pointer;
left: 0;
display: none;
${({listselected,selected}) =>listselected.tasksListChecked && !selected && (css`
display: initial;

`)}
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
export const IconStar = styled(BsStar)`
font-size:20px;
position: absolute;
left: 5px;
cursor: pointer;

`
export const CheckedStar = styled(BsStarFill)`
font-size:20px;
position: absolute;
left: 5px;
cursor: pointer;

`

export const IconTrash = styled(BsTrash)`
cursor: pointer;
:hover{
    color: red;
}

display: initial;

${({isvisible}) => isvisible.isVisibleCheckbox && (css`
display: none;
`)}
`;

export const Checkmark = styled.span`
position: absolute;
  left: 7px;
  top: 0;
  bottom:50%;
  height: 25px;
  width: 25px;
  background-color:#eee;
  border-radius: 25px;
  :hover  {
    background-color: #ccc;
}
:after {
  content: "";
  position: absolute;
  display: none;
}
`
export const CheckBoxCompleted = styled.input`
display: block;
position: absolute;
opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
left: 10px;
`

export const CheckBoxContainerCicle = styled.label`
 display: block;
  position: relative;
 margin-bottom:25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover ${CheckBoxCompleted} ~ ${Checkmark}{
    background-color: #2196F3;
}
${CheckBoxCompleted}:checked ~ ${Checkmark} {
  background-color: #2196F3;
}

${CheckBoxCompleted}:checked ~ ${Checkmark}:after {
  display: block;
}

${Checkmark}:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

${({isVisible}) => isVisible && (css`
display: none;
`)}
  
`



