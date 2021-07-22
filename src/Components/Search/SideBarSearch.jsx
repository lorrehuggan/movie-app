import React from 'react';

//Icons
import { AiOutlineSearch } from 'react-icons/ai';

//Styles
import { Wrapper, Form, SearchInput, Button } from './SideBarSearch.styles';

function SideBarSearch({ searchSubmit, searchHandler }) {
  return (
    <Wrapper direction="row">
      <Form direction="row" onSubmit={searchSubmit} action="search">
        <SearchInput
          onChange={searchHandler}
          type="text"
          placeholder="Search"
        />
        <Button type="submit">
          <AiOutlineSearch />
        </Button>
      </Form>
    </Wrapper>
  );
}

export default SideBarSearch;
