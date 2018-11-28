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
    console.log(buildProvider);
    const dataProvider = await buildProvider;
    this.setState({ dataProvider });
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Cargando...</div>;
    }

    return (
      <Admin locale="es" dataProvider={dataProvider} i18nProvider={i18nProvider}>
        <Resource name="Store"/>
        <Resource name="Service" list={ServiceList}/>
        <Resource name="Stream" list={StreamList}/>
        <Resource name="Fragment" list={FragmentList}/>
        <Resource name="Exclusion" list={ExclusionList}/>
        <Resource name="Label" list={LabelList}/>
        <Resource name="Rule" list={RuleList}/>
        <Resource name="Schedule" list={ScheduleList}/>
      </Admin>
    );
  }
}

export default App;
