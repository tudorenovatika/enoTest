import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import {StyledLi, StyledApp, StyledMainContent, StyledUl, StyledInput} from '../App.styled';

interface Props {
    changeUserList: (search:string) => void
}

function Search({changeUserList} : Props) {
 const [searchValue, setSearchValue] = useState('');

 const handleChange = (event: any) => {
    setSearchValue(event.target.value)
    debounce(event.target.value);
  };

  const debounce = useCallback(
    _.debounce((_searchVal: string) => {
        changeUserList(_searchVal)
    }, 400),
    []
  );

  return (
    <>
      <StyledInput  placeholder="Search user" type="text" onChange={handleChange} value={searchValue}></StyledInput> 

      
    </>
  );
}

export default Search;