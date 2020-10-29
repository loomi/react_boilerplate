import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

import { selectStyles } from './SearchBar.style';
import SearchBarButton from './SearchBarButton';

function SearchBar({
  loadOptions = () => {},
  onChange = () => {},
  debounce = true,
  ...props
}) {
  const [typingTimeout, setTypingTimeout] = useState(null);

  const debounceLoadOptions = (value, cb) => {
    if (!debounce) {
      loadOptions(value, cb);
      return;
    }
    if (typingTimeout === null) {
      setTypingTimeout(setTimeout(() => {
        loadOptions(value, cb);

        setTypingTimeout(null);
      }, 1000));
    } else {
      clearTimeout(typingTimeout);
      setTypingTimeout(null);
    }
  };

  return (
    <AsyncSelect
      styles={selectStyles}
      components={{ DropdownIndicator: SearchBarButton }}
      loadOptions={debounceLoadOptions}
      onChange={onChange}
      {...props}
    />
  );
}

export default SearchBar;
