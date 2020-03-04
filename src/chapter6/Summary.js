import React, { Component } from 'react'
import PropTypes from 'prop-types'

// ES6 클래스
class Summary extends Component{
  // 정적 프로퍼티 사용
  static propTypes = {
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    title: (props, propName) =>
      (typeof props[propName] !== 'string') ?
        new Error("제목(title)은 문자열이여야 합니다.") :
        (props[propName].length > 20) ?
          new Error("제목은 20자 이내여야 합니다.") :
          null
  }

  static defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[무제]"
  }

  render() {
    const {ingredients, steps, title} = this.props
    return(
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>재료 {ingredients.length} 종류 | </span>
          <span>총 {steps.length} 단계</span>
        </p>
      </div>
    )
  }
}

// 함수 외부 프로퍼티 사용
// Summary.propTypes = {
//   ingredients: PropTypes.array.isRequired,
//   steps: PropTypes.array.isRequired,
//   title: (props, propName) =>
//     (typeof props[propName] !== 'string') ?
//       new Error("제목(title)은 문자열이여야 합니다.") :
//       (props[propName].length > 20) ?
//         new Error("제목은 20자 이내여야 합니다.") :
//         null
// };

// Summary.defaultProps = {
//   ingredients: 0,
//   steps: 0,
//   title: "[무제]"
// }

export default Summary