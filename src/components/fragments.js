import React from 'react';
import {
  List,
  ArrayField,
  ChipField,
  Datagrid,
  DateField,
  FunctionField,
  ImageField,
  SingleFieldList,
  TextField,
  UrlField
} from 'react-admin';

export const FragmentList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <FunctionField
        label="Images"
        render={({ images }) => (
          <img style={{maxWidth: 200, maxHeight: 200}} src={images[0]}/>
        )}
      />
      <DateField source="datePublished"/>
      <ArrayField source="weekdays">
        <ChipField/>
      </ArrayField>
      <TextField source="headline"/>
      <TextField source="description"/>
      <UrlField source="url"/>
    </Datagrid>
  </List>
);

export const ArticleSectionList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name"/>
    </Datagrid>
  </List>
);
