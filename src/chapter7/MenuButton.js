import React, { Component } from 'react'

class MenuButton extends Component {
  componentWillReceiveProps(nextProps) {
    const collapsed =
      (nextProps.collapsed && nextProps.collapsed === true) ? true : false
    
    this.setState({collapsed})
  }

  render() {
    const { childeren, collapsed, txt, expandCollapse } = this.props
    return (
      <div className="pop-button">
        <button onClick={expandCollapse}>{txt}</button>
        {
          (!collapsed) ?
            <div className="pop-up">
              {childeren}
            </div> :
            ""
        }
      </div>
    )
  }
}

export default MenuButton