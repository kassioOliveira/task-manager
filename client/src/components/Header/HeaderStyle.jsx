import styled from "styled-components";


export const HeaderCompenentStyle = styled.header`
 border:1px solid gray;
 width: 30vw;
 height:100vh;
 position: absolute;
 background-color: #eeeeee;
 
    @media screen and (max-width: 650px) {
        width: 50vw;
        height: 100vh;
        position: absolute;     
        z-index: 10;
    }

    @media screen and (max-width: 350px) {
        width: 100vw;
        height: 100vh;
        position: absolute;     
        z-index: 10;
    }

    
`


