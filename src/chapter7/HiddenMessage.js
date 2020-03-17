import React, { Component } from 'react'

const XRegExp = require('xregexp')

const Letter = XRegExp('\\pL', 'g') // 유니코드 문자 클래스(\pL), global옵션

class HiddenMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: typeof props.hide === "boolean" ? props.hide : true
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({hidden: nextProps.hide})
  }


  render() {
    const { children } = this.props
    const { hidden } = this.state

    return (
      <p onMouseEnter={this.show}
         onMouseLeave={this.hide}
      >
        {
          (hidden) ?
          children.replace(Letter, "x") :
          children 
        }
      </p>
    )
  }
}

export default HiddenMessage