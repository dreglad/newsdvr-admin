import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const LabelList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name"/>
      <TextField source="value"/>
    </Datagrid>
  </List>
);
