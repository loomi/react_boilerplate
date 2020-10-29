import React from 'react';

import SearchIcon from 'components/icons/Search';
import { SearchButton } from './SearchBar.style';

function SearchBarButton() {
  return (
    <SearchButton>
      <SearchIcon />
    </SearchButton>
  );
}

export default SearchBarButton;
