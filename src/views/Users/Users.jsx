import React from 'react';
import Page from 'components/Page';

const Users = () => (
  <Page>
    <Page.Header title="Users" />
    <Page.Subtitle>Subtitle</Page.Subtitle>

    <Page.Tabs title="Usuários">
      <Page.Tab tab="Tipos 1" key="1">
        <h1>Usuários do Tipo 1</h1>
      </Page.Tab>
      <Page.Tab tab="Tipos 2" key="2">
        <h1>Usuários do Tipo 2</h1>
      </Page.Tab>
    </Page.Tabs>
  </Page>
);

export default Users;
