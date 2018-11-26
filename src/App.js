import React, { Component } from 'react';
import { Admin, Resource, Delete, ListGuesser, EditGuesser } from 'react-admin';

import { FragmentList } from './components/fragments';
import { StoreList } from './components/stores';
import { LabelList } from './components/labels';
import { ScheduleList } from './components/schedules';
import { RuleList } from './components/rules';
import { StreamList } from './components/streams';
import { ExclusionList } from './components/exclusions';
import { ServiceList } from './components/services';

import buildProvider from './apiDataProvider';

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }

  async componentDidMount() {
    this.setState({ dataProvider: await buildProvider() })
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="Store" list={StoreList}/>
        <Resource name="Fragment" list={FragmentList}/>
        <Resource name="Label" list={LabelList}/>
        <Resource name="Rule" list={RuleList}/>
        <Resource name="Stream" list={StreamList}/>
        <Resource name="Service" list={ServiceList}/>
        <Resource name="Schedule" list={ScheduleList}/>
        <Resource name="Exclusion" list={ExclusionList}/>
      </Admin>
    );
  }
}

export default App;
