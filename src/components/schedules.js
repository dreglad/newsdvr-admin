import React from 'react';
import {
  List,
  ArrayField,
  ChipField,
  Datagrid,
  TextField,
  SingleFieldList
} from 'react-admin';

export const ScheduleList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">

      <ArrayField source="defaultLabels">
        <Datagrid>
          <TextField source="name" />
          <ChipField source="value" />
        </Datagrid>
      </ArrayField>

      <ArrayField source="startTimes">
        <SingleFieldList>
          <ChipField source=""/>
        </SingleFieldList>
      </ArrayField>

      <ArrayField source="weekdays">
        <SingleFieldList>
          <ChipField />
        </SingleFieldList>
      </ArrayField>

      <TextField source="freq"/>

      <TextField source="duration"/>

      <TextField source="count"/>

      <TextField source="stream.name"/>
    </Datagrid>
  </List>
);
