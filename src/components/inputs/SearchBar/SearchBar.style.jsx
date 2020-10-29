import styled from 'styled-components';

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0 15px;
  margin: 0;
`;

export const selectStyles = {
  dropdownIndicator: (provided) => ({
    ...provided,
    border: 'none',
  }),

  indicatorSeparator: () => null,

  control: (provided) => ({
    ...provided,
    border: 'none',
  }),
};
