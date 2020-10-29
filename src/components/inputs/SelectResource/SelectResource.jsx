import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, List } from 'antd';
import { useField } from 'formik';
import SelectResourceItem from './SelectResourceItem';
import { StyledSelectResource } from './SelectResource.style';

function SelectResource({
  label, actionButton, request, towerName, companyName, ...props
}) {
  const [items, setItems] = useState();
  const [search, setSearch] = useState();
  const [inputValue, setInputValue] = useState();
  const [loadedTower, setLoadedTower] = useState(false);
  const [loadedCompany, setLoadedCompany] = useState(false);

  const [, meta, { setValue }] = useField(props);
  const { error, touched } = meta;
  const hasError = touched && error;

  useEffect(() => {
    if (towerName && !loadedTower) {
      setSearch(towerName);
      setInputValue(towerName);
      setLoadedTower(true);
    }
    if (companyName && !loadedCompany) {
      setSearch(companyName);
      setInputValue(companyName);
      setLoadedCompany(true);
    }
  }, [props]);

  useEffect(() => {
    (async () => {
      setItems(await request(search));
    })();
  }, [search, request]);

  const handleItemClick = ({ value, label: itemLabel }) => {
    setValue(value);
    setInputValue(itemLabel);
    setSearch(null);
  };

  return (
    <StyledSelectResource
      label={label}
      labelCol={{ span: 24 }}
      validateStatus={hasError && 'error'}
      help={hasError && error}
    >
      <Input
        {...props}
        value={search || inputValue}
        onChange={({ target }) => {
          setInputValue(null);
          setSearch(target.value);
        }}
      />

      <List
        bordered
        size="small"
        footer={actionButton}
        dataSource={items}
        renderItem={(item) => (
          <SelectResourceItem onClick={handleItemClick} {...item} />
        )}
      />
    </StyledSelectResource>
  );
}

SelectResource.propTypes = {
  label: PropTypes.string,
  actionButton: PropTypes.node,
  request: PropTypes.func,
};

SelectResource.defaultProps = {
  label: null,
  actionButton: null,
  request: () => {},
};

export default SelectResource;
