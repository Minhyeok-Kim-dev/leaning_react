import React from 'react'
import Expandable from './Expandable'

const XRegExp = require('xregexp')

const Letter = XRegExp('\\pL', 'g') // 유니코드 문자 클래스(\pL), global옵션


const HiddenMessage = Expandable(ShowHideMessage)

export default ShowHideMessage