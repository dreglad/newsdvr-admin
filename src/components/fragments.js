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



  // Fragment: {
  //   [GET_LIST]: gql`
  //     fragment FragmentFragment on Fragment {
  //       id
  //       start
  //       offset
  //       duration
  //       labels {
  //         id
  //         name
  //         value
  //       }
  //       storeName
  //     }
  //   `,
  // },


export const FragmentList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      {/*<FunctionField
        label="Images"
        render={({ images }) => (
          <img style={{maxWidth: 200, maxHeight: 200}} src={images[0]}/>
        )}
      />*/}
      <DateField source="start"/>
      {/*<DateField source="start"/>*/}
      <ArrayField source="labels">
        <ChipField source="name"/>
      </ArrayField>
      <TextField source="storeName"/>
      <TextField source="duration"/>
      <TextField source="offset"/>
    </Datagrid>
  </List>
);
