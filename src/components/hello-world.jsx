import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'

const defaultStyle = {
  margin: 'auto',
  marginTop: '5em',
  padding: '3em',
  width: '30%'
}

const HelloWorld = (props) => {
  let style = props.style
    ? Object.assign({}, defaultStyle, props.style)
    : defaultStyle
  return (
    <Paper style={style}>
      <h1>Hello World</h1>
    </Paper>
  )
}

HelloWorld.propTypes = {
  /**
	 * Override the inline-styles of the root element
	 */
  style: PropTypes.object
}

export default HelloWorld
