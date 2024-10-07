import {Switch, Route} from 'react-router-dom'

import MyProfile from './components/MyProfile'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={MyProfile} />
    </Switch>
  </>
)
export default App
