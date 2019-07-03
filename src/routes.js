import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PikaChuList from '../src/components/PikachuList/pikachu.container';
import PikachuItemDetailsComponent from '../src/components/PikachuDetails/pikachudetails.container';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PikaChuList}/>
      <Route exact path='/pikachu/:id' component={PikachuItemDetailsComponent}/>
    </Switch>
  </main>
)

export default Routes;