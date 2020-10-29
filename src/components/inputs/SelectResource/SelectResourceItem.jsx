import React from 'react';
import { List } from 'antd';

const SelectResourceItem = ({ onClick, ...item }) => (
  <List.Item
    onClick={() => onClick(item)}
    key={item.value}
  >
    {item.label}
  </List.Item>
);

export default SelectResourceItem;
