import styled, { css } from 'styled-components'



export const StyledApp = styled.div`
// position:fixed;
`

export const StyledUl = styled.ul`
display:flex;
flex-wrap:wrap;
list-style: none;
padding-inline-start:0px;
justify-content:space-evenly;
border-left: solid 3px black;
@media screen and (max-width: 767px)
{    
    margin-top:0rem;
    border-left:0px;
    padding-top:0.7rem;
    padding-inline-start:0px;
}
`

export const StyledLi = styled.li`
display:flex;
padding: 0.3rem 0.5rem 0.3rem 0.5rem;
margin-bottom:25px;
font-weight:bold;
@media screen and (min-width:2100px)
{
    flex: 1 0 14%;
    margin-left:10px;
    margin-right:10px;
}

@media screen and (min-width:1439px) and (max-width:2100px)
{    
    flex: 1 0 12%;
    margin-left:10px;
    margin-right:10px;
}


@media screen and (min-width:902px) and (max-width: 1439px)
{    
    flex: 1 0 18%;
    margin-left:10px;
    margin-right:10px;
}

@media screen and (min-width:767px) and (max-width: 902px)
{    
    flex: 1 0 15%;
    margin-left:10px;
    margin-right:10px;
}

@media screen and (max-width: 767px)
{
    width:75%;
    margin:auto;
    margin-top:25px;
    
}

height:25px;
border: solid 3px black;


text-align: left;
cursor: pointer;
`

export const StyledLiCounter = styled.div`
display: flex;
flex-direction:row;
margin-left:auto;
width:20px;
margin-top:2.5px;
margin-bottom:2.5px;
text-align:center;
font-weight:bold;
justify-content:center;
color:black;
background-color:#7B7B7B;
border-radius: 50%;
font-size:15px;
`

export const StyledMainContent = styled.div`
display: flex;
flex-direction:row;
justify-content:flex-start;
@media screen and (max-width: 767px) {
    justify-content:center;    
    flex-direction:column;
}
`

export const StyledInput = styled.input`
display: flex;
margin-left:20px;
margin-right:20px;
margin-top:1em;

@media screen and (max-width: 767px) {    
    margin-top:0px;    
}

border: solid 3px black;
height:25px;
padding: 4px 0.5rem 4px 0.5rem;
font-family: inherit;
font-size: 1.1rem;
`

export const StyledDeleteBtn = styled.button`
background-color:transparent;
border:0px;
cursor:pointer;
height:25px;
line-height:17px;
font-size:17px;
font-weight:bold;
`


export const StyledLiContent = styled.div`
display:flex;
flex-direction:row;
margin-left:auto;    
`

export const StyledListContainer = styled.div`
display: flex;
justify-content: flex-start;
@media screen and (max-width: 767px) { 
    margin-top:80px;
}
`

export const StyledInputContainer = styled.div`

@media screen and (max-width: 767px) {
    display:flex;
    position:fixed;
    top:0px;
    left:0px;
    height:90px;
    width:100%;
    background-color:white;
    justify-content:center;    
    flex-direction:column;
    border-bottom: solid 3px black; 
}

@media screen and (min-width:768px) and (max-width: 1439px)
{    
   
}
`