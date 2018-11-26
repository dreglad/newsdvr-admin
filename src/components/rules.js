import React from 'react';
import {
  ArrayField,
  ChipField,
  Datagrid,
  List,
  TextField
} from 'react-admin';

export const RuleList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ArrayField source="includedAnd">
        <Datagrid>
          <TextField source="name" />
          <ChipField source="value" />
        </Datagrid>
      </ArrayField>

      <ArrayField source="includedOr">
        <Datagrid>
          <TextField source="name" />
          <ChipField source="value" />
        </Datagrid>
      </ArrayField>

      <ArrayField source="excludedAnd">
        <Datagrid>
          <TextField source="name" />
          <ChipField source="value" />
        </Datagrid>
      </ArrayField>

      <ArrayField source="excludedOr">
        <Datagrid>
          <TextField source="name" />
          <ChipField source="value" />
        </Datagrid>
      </ArrayField>
    </Datagrid>
  </List>
);
