import React from 'react';
import './SideBarSearch.scss';
import { AiOutlineSearch } from 'react-icons/ai';

function SideBarSearch({ searchSubmit, searchHandler }) {
  return (
    <div className="sidebar__search ">
      <form onSubmit={searchSubmit} action="search">
        <input onChange={searchHandler} type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
}

export default SideBarSearch;
