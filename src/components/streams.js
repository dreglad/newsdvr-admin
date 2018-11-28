import React from 'react';
import {
  Datagrid,
  DateField,
  List,
  ReferenceManyField,
  TextField
} from 'react-admin';

export const StreamList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name"/>
      <ReferenceManyField label="Recording stores" reference="Store" target="stream.name">
        <Datagrid>
          <TextField source="name" />
          <DateField source="start" showTime />
          <DateField source="end" showTime />
        </Datagrid>
      </ReferenceManyField>

    </Datagrid>
  </List>
);
