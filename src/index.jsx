import './css/roboto.css'
import './css/main.css'

import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HelloWorld from './components/hello-world'
import HelloModule from './components/hello-module'

// Material-UI requires this before React V1.0 for onTouchTap
injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <HelloWorld />
      <HelloModule style={{ width: '40%' }} />
    </div>
  </MuiThemeProvider>
)

render(
  <App />,
  document.getElementById('root')
)
