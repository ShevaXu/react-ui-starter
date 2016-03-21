import React, { PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'

import styles from './hello-module.css'

const HelloModule = (props) => {
  return (
  <Paper className={styles.default} style={props.style}>
    <h1>Hello CSS-Module</h1>
  </Paper>
  )
}

HelloModule.propTypes = {
  /**
	 * Override the inline-styles of the root element
	 */
  style: PropTypes.object
}

export default HelloModule
