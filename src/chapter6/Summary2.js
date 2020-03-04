import React from 'react';
import PropTypes from 'prop-types'

// 상태가 없는 함수형 컴포넌트
const Summary2 = (
  { 
    ingredients = 0, 
    steps = 0, 
    title = `[무제2]`
  }) => {
  return (
    <div className="summary">
      <h1>{title}</h1>
      <p>
        <span>재료 {ingredients} 종류 | </span>
        <span>총 {steps} 단계 </span>
      </p>
    </div>
  )
}

Summary2.propTypes = {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
  title: (props, propName) =>
    (typeof props[propName] !== 'string') ?
      new Error("제목(title)은 문자열이여야 합니다.") :
      (props[propName].length > 20) ?
        new Error("제목은 20자 이내여야 합니다.") :
        null
}

// Summary2.defaultProps = {
//   ingredients: 0,
//   steps: 0,
//   title: "[무제]"
// }

export default Summary2