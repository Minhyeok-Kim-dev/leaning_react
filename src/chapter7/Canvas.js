import React from 'react'
import Children from './Children'

const Canvas = ({Children}) =>
  <svg height="200" width="500">
    <Children />
  </svg>

export default Canvas