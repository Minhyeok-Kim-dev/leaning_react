import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Star extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    selected: false,
    onClick: f => f
  }

  render() {
    const {selected, onClick} = this.props
    return (
      <div className= {(selected) ? "star selected" : "star"} onClick = {onClick}>
      </div>
    )
  }
}

export default Star