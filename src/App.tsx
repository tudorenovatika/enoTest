import _ from "lodash";
import React, { useEffect, useState } from "react";
import "./App.css";
import {
  StyledApp,
  StyledInputContainer,
  StyledListContainer,
  StyledMainContent,
  StyledUl,
} from "./App.styled";
import Search from "./components/Search";
import UserComponent from "./components/UserComponent";
import { getUserList } from "./modules/getUsers";
import { User } from "./modules/User";

const entireUserList: User[] = getUserList();

function App() {
  const [newUserList, setNewUserList] = useState<User[]>(entireUserList);

  const changeUserList = (searchValue: string) => {
    let queryString = searchValue;

    const _newUserList: User[] = [];
    newUserList.forEach((element) => {
      if (element.name.includes(queryString)) {
        _newUserList.push(element);
      }
    });
    setNewUserList(_newUserList);
  };

  const handleClicked = (user: User) => {
    let _newUserList: User[] = newUserList;

    _newUserList.forEach((element) => {
      if (element.id != user.id) {
        element.clicked += 1;
      }
    });

    _newUserList = newUserList;
    // console.log("_newUserList_",newUserList)
    setNewUserList([..._newUserList]);
  };

  const handleDeleteFromList = (index: number) => {
    console.log(index);
    let _newUserList: User[] = newUserList;
    // console.log(index);
    // console.log(newUserList[index]);
    _newUserList.splice(
      _.indexOf(_newUserList, _.find(_newUserList, { id: index })),
      1
    );
    //re-attribution with initial array?
    _newUserList = newUserList;
    setNewUserList([..._newUserList]);
  };

  useEffect(() => {
    // console.log("newUserList", newUserList)
  }, [newUserList]);

  return (
    <StyledApp>
      <StyledMainContent>
        <StyledInputContainer>
          <Search changeUserList={changeUserList}></Search>
        </StyledInputContainer>
        <StyledListContainer>
          <StyledUl id="mapSearchList">
            {newUserList.map((user, index) => (
              <UserComponent
                handleDeleteFromList={handleDeleteFromList}
                handleClicked={handleClicked}
                user={user}
                index={user.id}></UserComponent>
            ))}
          </StyledUl>
        </StyledListContainer>
      </StyledMainContent>
    </StyledApp>
  );
}

export default App;
