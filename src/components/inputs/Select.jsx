import React, { useState } from 'react';
import {
  Input, Card, Row, Col, Divider, Popconfirm,
} from 'antd';
import { EditFilled, DeleteFilled, PlusCircleOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import Edit from 'components/modals/Edit';

function SelectItem({
  opt,
  setSearch,
  setValue,
  editInfo,
  deleteInfo,
}) {
  const [editing, setEditing] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [option, setOption] = useState(null);

  if (deleted) return null;

  return (
    <>
      <Col
        span={20}
        onClick={() => {
          setSearch(opt.label);
          setValue(opt);
        }}
      >
        <p style={{
          margin: 'auto 0', cursor: 'pointer',
        }}
        >
          {opt.label}
        </p>
      </Col>
      <Col span={2}>
        {editInfo && (
          <>
            <Edit
              visible={editing}
              setVisible={setEditing}
              initialValue={opt.label}
              id={opt.value.id || opt.value}
              {...editInfo}
              onSubmit={async ({ id, value }) => {
                const { status } = await editInfo.onSubmit({ id, value });
                if (status === 204) {
                  editInfo.successMessage();
                  setOption((prevOption) => ({ ...prevOption, label: value }));
                  setSearch(value);
                } else {
                  editInfo.errorMessage();
                }
              }}
            />
            <EditFilled
              onClick={() => setEditing(true)}
              style={{ cursor: 'pointer' }}
            />
          </>
        )}
      </Col>
      <Col span={2}>
        {deleteInfo && (
          <Popconfirm
            title={deleteInfo.title}
            okText="Sim"
            cancelText="Não"
            onConfirm={async () => {
              let value;
              if (opt.value.id) {
                value = opt.value.id;
              } else {
                value = opt.value;
              }

              try {
                const { status } = await deleteInfo.onConfirm({ id: value });
                if (status === 422) {
                  deleteInfo.errorMessage();
                  return;
                }
                deleteInfo.successMessage();
                setDeleted(true);
              } catch {
                deleteInfo.errorMessage();
              }
            }}
          >
            <DeleteFilled
              style={{ cursor: 'pointer' }}
            />
          </Popconfirm>
        )}
      </Col>
    </>
  );
}

function Select({
  search,
  setSearch,
  options,
  setValue,
  createText = '',
  type,
  action,
  deleteInfo,
  editInfo,
}) {
  const cardStyle = {
    backgroundColor: type ? 'white' : '#53be81',
    color: type ? 'black' : 'white',
    marginTop: '1em',
  };

  const dividerStyle = { backgroundColor: type ? 'black' : 'white', opacity: type ? 1 : 0.5 };
  const textStyle = { color: type ? 'black' : 'white', cursor: 'pointer', fontSize: '1.2em' };
  return (
    <>
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      <Card
        bordered={false}
        style={cardStyle}
      >
        <Row style={{ fontSize: '1.2em' }}>
          {
            options.map((opt) => (
              <SelectItem
                key={opt.value.id || opt.value}
                opt={opt}
                setValue={setValue}
                setSearch={setSearch}
                editInfo={editInfo}
                deleteInfo={deleteInfo}
              />
            ))
          }
        </Row>
        <Divider style={dividerStyle} />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        {createText && (
          <div role="button" tabIndex={0} onClick={() => (typeof action !== 'undefined' ? action() : {})}>
            <Text style={textStyle}>
              <PlusCircleOutlined style={{ marginRight: '1em' }} />
              {createText}
            </Text>
          </div>
        )}
      </Card>
    </>
  );
}

export default Select;
