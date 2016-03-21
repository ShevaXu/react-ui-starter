import './css/roboto.css'
import './css/main.css'

import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import HelloWorld from './components/hello-world'
import HelloModule from './components/hello-module'

// Material-UI requires this before React V1.0 for onTouchTap
injectTapEventPlugin()

render(
  <div>
    <HelloWorld />
    <HelloModule style={{ width: '40%' }} />
  </div>,
  document.getElementById('root')
)
