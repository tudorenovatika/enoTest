import React, { useState } from 'react';
import {StyledLi, StyledApp, StyledMainContent, StyledUl, StyledInput, StyledLiContent, StyledDeleteBtn, StyledLiCounter} from '../App.styled';
import {User} from "../modules/User"

interface Props {
  handleDeleteFromList: (e:any) => void
  handleClicked: (user:User) => void
  user: User
  index: number
}



function UserComponent({handleDeleteFromList, handleClicked, user, index} : Props) {

  const deleteUserFromList = (index:number) => {
    handleDeleteFromList(index)
  }

  return (
  <>
    <StyledLi onClick={() => handleClicked(user)} key={index}>
        
        {user.name}
        <StyledLiContent>
        {user.clicked > 0 ? <StyledLiCounter>{user.clicked}</StyledLiCounter>: ""} 
        <StyledDeleteBtn onClick={
          (e) => {
            deleteUserFromList(index)
            e.stopPropagation()}
            }>
          x
          </StyledDeleteBtn>
        </StyledLiContent>  
        
    </StyledLi>
  </>
  );
}


export default UserComponent;