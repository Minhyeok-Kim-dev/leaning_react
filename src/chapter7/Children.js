import React, {Children, PropTypes} from 'react'
import {render} from 'react-dom'

const findChild = (children, child) =>
  Children.toArray(children).filter(c => c.type === child)[0]

const WhenTruthy = ({children}) =>
  Children.only(children)

const WhenFalsy = ({children}) =>
  Children.only(children)

const Display = ({ ifTruthy=true, children }) =>
  (ifTruthy) ?
    findChild(children, WhenTruthy) :
    findChild(children, WhenFalsy)

const age = 19

render(
  <Display ifTruthy={age >= 21}>
    <WhenTruthy>
      <h1>들어오세요</h1>
    </WhenTruthy>
    <WhenFalsy>
    <h1>애들은 가!</h1>
    </WhenFalsy>
  </Display>,
  document.getElementById('react-container')
)

export default Children